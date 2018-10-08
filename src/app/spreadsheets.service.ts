import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { concat } from 'rxjs';

import { AppService } from './app.service';

import { environment } from '../environments/environment';

import {
  Quarter,
  Type,
  GradeSubject,
  SelectedSubject,
  GroupMeta,
  Posgrade,
  PosgradeStudies,
  PosgradeOptions,
  LinkList,
  AllReports,
  ReportArray,
  Report,
  ReportColumn
} from './models';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetsService {
  gradeData$: Observable<Quarter[]> = of(this.getGradeData());
  gradeLinks$: Observable<LinkList[]> = of(this.getGradeLinks());
  posgradeData$: Observable<Posgrade[]> = of(this.getPosgradeData());
  report$: Observable<AllReports[]> = of(this.getReports());

  constructor(private http: HttpClient, private appService: AppService) {}

  getJSON(id: string, n: number | string = 1) {
    const url = `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`;
    return this.http.get<any>(url);
  }

  getGradeLinks(): LinkList[] {
    const links: LinkList[] = [];
    this.getJSON(environment.spreadsheets.grade.subjects, 2).subscribe(data => {
      const row = data.feed.entry[0];
      links.push(
        {
          text: 'planificacion_docente',
          url: row.gsx$planificaciondocente.$t
        },
        {
          text: 'calendario_escolar',
          url: row.gsx$calendarioescolar.$t
        },
        {
          text: 'calendario_de_examenes',
          url: row.gsx$calendariodeexamenes.$t
        }
      );
    });
    return links;
  }
  getGradeData(): Quarter[] {
    const all: Quarter[] = [];
    this.getJSON(environment.spreadsheets.grade.subjects).subscribe(data => {
      let quarter: Quarter,
        lastCourse: string,
        lastQuarter: string,
        type: Type,
        lastType: string,
        subject: GradeSubject,
        lastSubject: string;

      data.feed.entry.map(e => {
        if (e.gsx$cuatrimestre.$t.trim() !== lastQuarter) {
          lastQuarter = e.gsx$cuatrimestre.$t.trim();
          quarter = {
            quarter: lastQuarter,
            types: []
          };
          all.push(quarter);
        }
        if (
          e.gsx$tipo.$t.trim() !== lastType ||
          e.gsx$curso.$t.trim() !== lastCourse
        ) {
          lastCourse = e.gsx$curso.$t.trim();
          lastType = e.gsx$tipo.$t.trim();
          type = {
            type: e.gsx$tipo.$t.trim(),
            subjects: [],
            course: parseInt(e.gsx$curso.$t.trim(), 10)
          };
          quarter.types.push(type);
        }

        if (e.gsx$asignatura.$t.trim() !== lastSubject) {
          lastSubject = e.gsx$asignatura.$t.trim();
          subject = {
            name: lastSubject,
            groups: [],
            spreadsheetId: e.gsx$id.$t.trim(),
            code: e.gsx$codigo.$t.trim(),
            description: e.gsx$descripcion.$t.trim(),
            coordinator: e.gsx$coordinador.$t.trim(),
            course: e.gsx$curso.$t.trim(),
            links: []
          };
          type.subjects.push(subject);
        }
        if (e.gsx$grupo.$t.trim() === '') {
          subject.links.push({
            url: e.gsx$url.$t.trim(),
            text: e.gsx$texto.$t.trim()
          });
        } else {
          subject.groups.push({
            name: e.gsx$grupo.$t.trim(),
            page: e.gsx$pagina.$t.trim(),
            code: e.gsx$codigogrupo.$t.trim()
          });
        }
      });

      all.map(q =>
        q.types.map(t =>
          t.subjects.sort((a, b) => {
            t.subjects.map(s =>
              // Sort group by code if it has code, otherwise, order by name
              s.groups.sort(
                (c, d) =>
                  c.code !== ''
                    ? c.code < d.code
                      ? 1
                      : -1
                    : c.name < d.name
                      ? -1
                      : 1
              )
            );
            // Sort subjects by code.
            return a < b ? 1 : -1;
          })
        )
      );
    });
    return all;
  }
  getSubject(data, p): SelectedSubject {
    let coincidences = [];
    data.map(quarter => {
      quarter.types.map(type => {
        type.subjects.map(subject => {
          subject.groups.map(group => {
            const groupP = ['básica', 'intensificacion'].includes(type.type)
              ? p.group.split('_')[1]
              : p.group;

            if (
              `cuatrimestre_${quarter.quarter}` === p.quarter &&
              type.type === p.type &&
              subject.name === p.subject &&
              group.name === groupP
            ) {
              coincidences.push({
                quarter: p.quarter,
                type: p.type,
                subject,
                group
              });
            }
          });
        });
      });
    });

    if (coincidences.length > 1 && p.code !== undefined) {
      coincidences = coincidences.filter(e => {
        return e.group.code === p.code;
      });
    }
    return coincidences[0];
  }

  getGroup(id: string, page: string): GroupMeta[] {
    let groupData: GroupMeta[] = [];
    groupData.find(e => true);
    this.getJSON(id, page).subscribe(data => {
      data.feed.entry.map(e => {
        const keys = Object.keys(e).filter(key => key.match(/gsx\$\w+/g));
        keys.splice(keys.indexOf('gsx$grupo'), 1);
        keys.map(key => {
          if (e[key].$t.trim() !== '' || e[key].$t.trim() !== null) {
            if (
              groupData.find(ee => ee.title === key.replace('gsx$', '')) ===
              undefined
            ) {
              groupData.push({
                title: key.replace('gsx$', ''),
                values: []
              });
            }
            if (e[key].$t.trim() !== '') {
              const index = groupData.findIndex(
                ee => ee.title === key.replace('gsx$', '')
              );
              groupData[index].values.push(e[key].$t.trim());
            }
          }
        });
      });
      groupData = this.sort(groupData, 'profesores enlaces avisos');
    });

    groupData.map(e => e.values.map(ee => ee !== ''));

    return groupData;
  }

  sort(fields: GroupMeta[], keys: string): GroupMeta[] {
    const newFields = [];
    keys.split(' ').map(key => {
      newFields.push(fields.find(e => e.title === key));
    });
    return { ...newFields, ...fields };
  }

  getPosgradeData(): Posgrade[] {
    const all: Posgrade[] = [];
    this.getJSON(environment.spreadsheets.posgrade.subjects).subscribe(data => {
      let posgrade: Posgrade,
        lastPosgrade: string,
        studies: PosgradeStudies,
        lastStudies: string,
        posgradeLinks: PosgradeOptions,
        lastLinks: string;

      data.feed.entry.map(row => {
        if (row.gsx$estudios.$t.trim() !== lastPosgrade) {
          lastPosgrade = row.gsx$estudios.$t.trim();
          posgrade = {
            title: row.gsx$estudios.$t.trim(),
            studies: []
          };
          all.push(posgrade);
        }
        if (row.gsx$tipo.$t.trim() !== lastStudies) {
          lastStudies = row.gsx$tipo.$t.trim();
          studies = {
            title: row.gsx$tipo.$t.trim(),
            options: []
          };
          posgrade.studies.push(studies);
        }
        if (row.gsx$nombre.$t.trim() !== lastLinks) {
          lastLinks = row.gsx$nombre.$t.trim();
          posgradeLinks = {
            title: row.gsx$nombre.$t.trim(),
            link: '',
            linkList: []
          };
          studies.options.push(posgradeLinks);
        }
        // Has options
        if (row.gsx$links.$t.trim() !== '') {
          posgradeLinks.linkList.push({
            url: row.gsx$links.$t.trim(),
            text:
              row.gsx$textolinks.$t.trim() === ''
                ? row.gsx$links.$t.trim()
                : row.gsx$textolinks.$t.trim()
          });
        } else {
          posgradeLinks.link = row.gsx$link.$t.trim();
        }
      });
      all.map(t =>
        t.studies.map(s => s.options.sort((a, b) => (a < b ? 1 : -1)))
      );
    });
    return all;
  }

  getReports(): AllReports[] {
    const arr: AllReports[] = [];
    this.getJSON(environment.spreadsheets.reports).subscribe(dataFirstPage => {
      const observables = [];
      dataFirstPage.feed.entry.map(e => {
        observables.push(
          this.getJSON(environment.spreadsheets.reports, e.gsx$pagina.$t)
        );
      });

      let reportYear: ReportArray[] = [];
      concat(...observables).subscribe(d => {
        let data: any = d;
        const year: string = data.feed.title.$t;

        let type: ReportArray = { title: '', reports: [] },
          lastType: string,
          reports: Report[] = [],
          column: ReportColumn[] = [],
          lastColumn: string;

        data = data.feed.entry;
        lastColumn = data[1].gsx$columna.$t.trim();
        lastType = data[1].gsx$tipo.$t.trim();

        data.map((row, i) => {
          if (row.gsx$tipo.$t.trim() === 'general') {
            type = {
              title: row.gsx$tipo.$t.trim(),
              reports: [
                {
                  title: row.gsx$texto.$t.trim(),
                  url: row.gsx$url.$t.trim()
                }
              ]
            };
            reportYear.push(type);
          } else {
            if (row.gsx$tipo.$t.trim() !== lastType) {
              reports.push({
                title: lastColumn,
                column
              });
              lastColumn = row.gsx$columna.$t.trim();
              column = [];
              type = {
                reports,
                title: lastType
              };
              reportYear.push(type);
              lastType = row.gsx$tipo.$t.trim();
              reports = [];
            } else {
              if (row.gsx$columna.$t.trim() !== lastColumn) {
                reports.push({
                  title: lastColumn,
                  column
                });
                lastColumn = row.gsx$columna.$t.trim();
                column = [];
              }
            }
            column.push({
              title: row.gsx$asignatura.$t.trim(),
              url: row.gsx$url.$t.trim(),
              code: row.gsx$code.$t.trim()
            });
            if (i === data.length - 1) {
              reports.push({
                title: lastColumn,
                column
              });
              type = {
                reports,
                title: lastType
              };
              reportYear.push(type);
            }
          }
        });
        arr.push({
          year,
          content: reportYear
        });
        reportYear = [];
        arr.map(y =>
          y.content.map(t => {
            if (t.title === 'posgrado') {
              t.reports.map((p, index) => {
                if (['masteres_universitarios', 'doctorado'].includes(p.title)) {
                  t.reports.splice(index, 1);
                  t.reports.unshift(p);
                }
              });
            }
            /*
            t.reports.map(r => {
              if (r.column !== undefined) {
                r.column.sort((a, b) => (a.title < b.title ? 1 : -1));
              }
            });
            */
          })
        );
      });
    });
    return arr;
  }
}

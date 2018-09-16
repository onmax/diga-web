import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';

import { Observable, of } from 'rxjs';

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
  LinkList
} from './models';

import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetsService {
  gradeData$: Observable<Quarter[]> = of(this.getGradeData());
  gradeLinks$: Observable<LinkList[]> = of(this.getGradeLinks());
  posgradeData$: Observable<Posgrade[]> = of(this.getPosgradeData());

  constructor(private http: HttpClient, private appService: AppService) {}

  getJSON(id: string, n: number | string = 1) {
    const url = `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`;
    return this.http.get<any>(url);
  }

  getJSONWithProgress(id: string, n: number | string = 1) {
    const url = `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`;
    return this.http.get<any>(url, {
      reportProgress: true,
      observe: 'events'
    });
  }

  handleEvent(event, size: number = 1, isLoading: string): boolean {
    if (event.type === HttpEventType.DownloadProgress) {
      const percentage: number = Math.round((event.loaded * 100) / size);

      this.appService.loadingBar$[isLoading].next(percentage);
    } else if (event.type === HttpEventType.Response) {
      return true;
    }
    return false;
  }

  getGradeLinks(): LinkList[] {
    const links: LinkList[] = [];
    this.getJSON(environment.spreadsheets.grade.subjects, 2).subscribe(data => {
      const row = data.feed.entry[0];
      links.push(
        {
          text: 'Planificación docente',
          url: row.gsx$planificaciondocente.$t
        },
        {
          text: 'Calendario escolar',
          url: row.gsx$calendarioescolar.$t
        },
        {
          text: 'Calendario de exámenes',
          url: row.gsx$calendariodeexamenes.$t
        }
      );
    });
    return links;
  }
  getGradeData(): Quarter[] {
    const all: Quarter[] = [];
    this.getJSONWithProgress(environment.spreadsheets.grade.subjects).subscribe(
      event => {
        if (this.handleEvent(event, 74442, 'gradeSubjects')) {
          let data: any = event;
          data = data.body.feed.entry;

          let quarter: Quarter,
            lastQuarter: string,
            type: Type,
            lastType: string,
            subject: GradeSubject,
            lastSubject: string;

          data.map(e => {
            if (e.gsx$cuatrimestre.$t.trim() !== lastQuarter) {
              lastQuarter = e.gsx$cuatrimestre.$t.trim();
              quarter = {
                quarter: lastQuarter,
                types: []
              };
              all.push(quarter);
            }
            if (e.gsx$tipo.$t.trim() !== lastType) {
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
                bibliography:
                  e.gsx$bibliografia.$t.trim().split(environment.split)[0] ===
                  ''
                    ? []
                    : e.gsx$bibliografia.$t.trim().split(environment.split),
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
        }
      }
    );
    return all;
  }
  getSubject(data, p): SelectedSubject {
    let coincidences = [];

    data.map(quarter => {
      quarter.types.map(type => {
        type.subjects.map(subject => {
          subject.groups.map(group => {
            const groupP = ['troncal', 'intensificacion'].includes(type.type)
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
    this.getJSONWithProgress(id, page).subscribe(event => {
      if (this.handleEvent(event, 3439, 'gradeSubject')) {
        let data: any = event;
        data = data.body.feed.entry;
        data.map(e => {
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
      }
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
    this.getJSONWithProgress(
      environment.spreadsheets.posgrade.subjects
    ).subscribe(event => {
      if (this.handleEvent(event, 20000, 'gradeSubjects')) {
        let data: any = event;
        data = data.body.feed.entry;

        let posgrade: Posgrade,
          lastPosgrade: string,
          studies: PosgradeStudies,
          lastStudies: string,
          posgradeLinks: PosgradeOptions,
          lastLinks: string;

        data.map(row => {
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
      }
    });
    return all;
  }
}

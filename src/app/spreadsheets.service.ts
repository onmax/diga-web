import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment';
import {
  Quarter,
  Type,
  GradeSubject,
  SelectedSubject,
  GroupMeta
} from './models';
import { Http } from '@angular/http';

import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetsService {
  gradeData$: Observable<Quarter[]> = of(this.getAllSubjects());

  constructor(private http: HttpClient, private appService: AppService) {}

  getJSON(id: string, n: number | string = 1) {
    const url = `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`;
    return this.http.get<any>(url);
  }

  getJSONWithReport(id: string, n: number | string = 1) {
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
  getAllSubjects(): Quarter[] {
    const all: Quarter[] = [];
    this.getJSONWithReport(environment.spreadsheets.subjects.all).subscribe(
      event => {
        if (this.handleEvent(event, 74442, 'gradeSubjects')) {
          let data: any = event;
          data = data.body.feed.entry;

          let quarter: Quarter,
            lastQuarter: string,
            type: Type,
            lastType,
            subject: GradeSubject,
            lastSubject;

          data.map(e => {
            if (e.gsx$cuatrimestre.$t !== lastQuarter) {
              lastQuarter = e.gsx$cuatrimestre.$t;
              quarter = {
                quarter: lastQuarter,
                types: []
              };
              all.push(quarter);
            }
            if (e.gsx$tipo.$t !== lastType) {
              lastType = e.gsx$tipo.$t;
              type = {
                type: e.gsx$tipo.$t,
                subjects: [],
                course: parseInt(e.gsx$curso.$t, 10)
              };
              quarter.types.push(type);
            }
            if (e.gsx$asignatura.$t !== lastSubject) {
              lastSubject = e.gsx$asignatura.$t;
              subject = {
                name: lastSubject,
                groups: [],
                spreadsheetId: e.gsx$id.$t,
                code: e.gsx$codigo.$t,
                description: e.gsx$descripcion.$t,
                bibliography:
                  e.gsx$bibliografia.$t.split(environment.split)[0] === ''
                    ? []
                    : e.gsx$bibliografia.$t.split(environment.split),
                coordinator: e.gsx$coordinador.$t,
                course: e.gsx$curso.$t
              };
              type.subjects.push(subject);
            }

            subject.groups.push({
              name: e.gsx$grupo.$t,
              page: e.gsx$pagina.$t,
              code: e.gsx$codigogrupo.$t
            });
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
            const groupP = ['basica', 'intensificacion'].includes(type.type)
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
    this.getJSONWithReport(id, page).subscribe(event => {
      if (this.handleEvent(event, 3439, 'gradeSubject')) {
        let data: any = event;
        data = data.body.feed.entry;
        data.map(e => {
          const keys = Object.keys(e).filter(key => key.match(/gsx\$\w+/g));
          keys.splice(keys.indexOf('gsx$grupo'), 1);
          keys.map(key => {
            if (e[key].$t.trim() !== '' || e[key].$t !== null) {
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
}

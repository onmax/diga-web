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
    return this.http.get<any>(url, {
      reportProgress: true,
      observe: 'events'
    });
  }

  handleEvent(event, size: number = 1, isLoading: string): boolean {
    if (event.type === HttpEventType.DownloadProgress) {
      console.log(event.loaded);

      const percentage: number = Math.round((event.loaded * 100) / size);
      console.log(percentage + '%');

      this.appService.loadingBar$[isLoading].next(percentage);
    } else if (event.type === HttpEventType.Response) {
      return true;
    }
    return false;
  }
  getAllSubjects(): Quarter[] {
    const all: Quarter[] = [];
    console.time('Grade info');
    this.getJSON(environment.spreadsheets.subjects.all).subscribe(event => {
      if (this.handleEvent(event, 74442, 'gradeSubjects')) {
        console.timeEnd('Grade info');
        let data: any = event;
        data = data.body.feed.entry;

        let quarter: Quarter,
          lastQuarter: string,
          type: Type,
          lastType,
          subject: GradeSubject,
          lastSubject;

        data.map(e => {
          if (e.gsx$quarter.$t !== lastQuarter) {
            lastQuarter = e.gsx$quarter.$t;
            quarter = {
              quarter: lastQuarter,
              types: []
            };
            all.push(quarter);
          }
          if (e.gsx$type.$t !== lastType) {
            lastType = e.gsx$type.$t;
            type = {
              type: e.gsx$type.$t,
              subjects: [],
              course: parseInt(e.gsx$course.$t, 10)
            };
            quarter.types.push(type);
          }
          if (e.gsx$subject.$t !== lastSubject) {
            lastSubject = e.gsx$subject.$t;
            subject = {
              name: lastSubject,
              groups: [],
              spreadsheetId: e.gsx$id.$t,
              code: e.gsx$code.$t,
              description: e.gsx$description.$t,
              bibliography:
                e.gsx$bibliography.$t.split(environment.split)[0] === ''
                  ? []
                  : e.gsx$bibliography.$t.split(environment.split),
              coordinator: e.gsx$coordinator.$t,
              course: e.gsx$course.$t
            };
            type.subjects.push(subject);
          }

          subject.groups.push({
            name: e.gsx$group.$t,
            page: e.gsx$page.$t,
            code: e.gsx$groupcode.$t
          });
        });
      }
    });
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

  getGroup(id: string, page: string): GroupMeta {
    const groupData: GroupMeta = {
      teachers: []
    };
    const ddd = {};
    console.time('Subject info');
    this.getJSON(id, page).subscribe(event => {
      if (this.handleEvent(event, 3439, 'gradeSubject')) {
        console.timeEnd('Subject info');
        let data: any = event;
        data = data.body.feed.entry;
        console.log(data);
        data.map(e => {
          const keys = Object.keys(e).filter(key => key.match(/gsx\$\w+/g));
          keys.splice(keys.indexOf('gsx$grupo'), 1);
          keys.map(key => {
            if (e[key].$t.trim() !== '' || e[key].$t !== null) {
              if (ddd[key.replace('gsx$', '')] === undefined) {
                ddd[key.replace('gsx$', '')] = [];
              }
              ddd[key.replace('gsx$', '')].push(e[key].$t);
            }
          });
          if (e.gsx$profesores.$t.trim() !== '') {
            groupData.teachers.push(e.gsx$profesores.$t);
          }
        });
      }
    });

    console.log(ddd);
    for (const e in ddd) {
      if (typeof ddd[e] === 'object') {
        ddd[e].map(ee => ee !== '');
      }
    }
    console.log(ddd);
    return groupData;
  }
}

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
@Injectable({
  providedIn: 'root'
})
export class SpreadsheetsService {
  gradeData$: Observable<Quarter[]> = of(this.getAllSubjects());

  constructor(private http: HttpClient) {}

  getJSON(id: string, n: number | string = 1) {
    const url = `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`;
    return this.http.get<any>(url);
  }

  request(id) {
    const url = `https://spreadsheets.google.com/feeds/list/${id}/1/public/values?alt=json`;
    const request = new HttpRequest('GET', url, {
      reportProgress: true
    });
    this.http.request(request).subscribe(data => {
      console.log(data, '_______');
    });
  }

  getAllSubjects(): Quarter[] {
    this.request(environment.spreadsheets.subjects.all);
    const all: Quarter[] = [];
    this.getJSON(environment.spreadsheets.subjects.all).subscribe(data => {
      let quarter: Quarter,
        lastQuarter: string,
        type: Type,
        lastType,
        subject: GradeSubject,
        lastSubject;
      data = data.feed.entry;

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

  getGroup(id: string, page: string) {
    const groupData: GroupMeta = {
      teachers: []
    };
    this.getJSON(id, page).subscribe(data => {
      console.log(data.feed.entry);
      data.feed.entry.map(e => {
        if (e.gsx$profesores.$t.trim() !== '') {
          groupData.teachers.push(e.gsx$profesores.$t);
        }
      });
    });
  }
}

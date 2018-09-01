import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment';
import { Quarter, Type, GradeSubject } from './models';
@Injectable({
  providedIn: 'root'
})
export class SpreadsheetsService {
  gradeData$: Observable<Quarter[]> = of(this.getAllSubjects());

  constructor(private http: HttpClient) {}

  getJSON(id: string, n: number | string = 1) {
    return this.http.get<any>(
      `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`
    );
  }

  getAllSubjects(): Quarter[] {
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
            subjects: []
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
            bibliography: e.gsx$bibliography.$t.split(environment.split),
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
  getGroup(data, p): GradeSubject {
    let coincidences = [];

    data.map(quarter => {
      quarter.types.map(type => {
        type.subjects.map(subject => {
          subject.groups.map(group => {
            const groupP = ['basic', 'intensification'].includes(type.type)
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
}

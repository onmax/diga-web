import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Quarter, Type, Subject, Groups } from './models';
@Injectable({
  providedIn: 'root'
})
export class SpreadsheetsService {
  constructor(private http: HttpClient) {}

  getJSON(id: string, n: number | string = 1) {
    return this.http.get<any>(
      `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`
    );
  }

  getAllSubjects() {
    const all: Quarter[] = [];
    this.getJSON(environment.spreadsheets.subjects.all).subscribe(data => {
      let quarter: Quarter,
        lastQuarter: string,
        type: Type,
        lastType,
        subject: Subject,
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
            code: e.gsx$code.$t
          };
          type.subjects.push(subject);
        }
        subject.groups.push({
          name: e.gsx$group.$t,
          page: e.gsx$page.$t
        });
      });
    });
    return all;
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { SpreadsheetsService } from '../../spreadsheets.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { SpreadsheetSubject, Semester, GeneralSubjectData } from '../../models';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnChanges {
  spreadsheetSubject: SpreadsheetSubject;
  params: any;
  commonData: GeneralSubjectData;
  subject: Semester[] = [];
  constructor(
    private spreadsheetsService: SpreadsheetsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchData();
    this.scrollToView();
  }

  ngOnChanges() {}

  scrollToView() {
    document
      .getElementById('subjectInfo')
      .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  fetchData() {
    let subjectMeta;

    this.activatedRoute.params.subscribe(
      params => (this.params = { ...params })
    );

    this.spreadsheetsService
      .getJSON(environment.spreadsheets.subjects.grades, 1)
      .subscribe(data => {
        data = data.feed.entry;
        subjectMeta = data.filter(e => {
          return (
            e.gsx$quarter.$t === this.params.quarter &&
            e.gsx$type.$t === this.params.type &&
            e.gsx$subject.$t === this.params.subject &&
            e.gsx$group.$t === this.params.group
          );
        });
        this.spreadsheetSubject = {
          page: subjectMeta[0].gsx$page.$t,
          spreadsheetId: subjectMeta[0].gsx$id.$t
        };
        this.fetchGroup();
        this.fetchSubject();
      });
  }

  fetchGroup() {
    console.log(this.spreadsheetSubject);

    this.spreadsheetsService
      .getJSON(
        this.spreadsheetSubject.spreadsheetId,
        this.spreadsheetSubject.page
      )
      .subscribe(data => {
        // console.log(data);
      });
  }

  fetchSubject() {
    this.spreadsheetsService
      .getJSON(this.spreadsheetSubject.spreadsheetId, 1)
      .subscribe(data => {
        const rawData = data.feed.entry;

        const groups = [],
          bibliography = [];
        rawData.map(e => {
          if (e.gsx$grupos.$t !== '' && e.gsx$hojaexcel.$t !== '') {
            groups.push({
              name: e.gsx$grupos.$t,
              page: e.gsx$hojaexcel.$t
            });
          }
          if (e.gsx$bibliografia.$t !== '') {
            bibliography.push(e.gsx$bibliografia.$t);
          }
        });

        this.commonData = {
          name: rawData[0].gsx$nombre.$t,
          course: rawData[0].gsx$curso.$t,
          code: rawData[0].gsx$codigoasignatura.$t,
          coordinator: rawData[0].gsx$coordinador.$t,
          description: rawData[0].gsx$descripciondelaasignatura.$t,
          bibliography: bibliography,
          groups
        };
        console.log(this.commonData);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Columns, Subject, Semester } from './grado.module';
import { SpreadsheetsService } from '../../spreadsheets.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css', './subject-list.css']
})
export class GradoComponent implements OnInit {
  private id_first_semester: string =
    '1hmXByLguRRq8_Mcq50YbTyp0WzwlIKmQ8uEVYluwIhI';
  private id_second_semester: string =
    '1O_Q0U0rVeyEPVIcGaIdYPqpeNI-3j7ogfFwM4lMpPzo';

  gradeData: Semester[] = [];
  columnsData: Columns[] = [];
  params: string[];
  constructor(
    private spreadsheet: SpreadsheetsService,
    private translateService: TranslateService,
    private appService: AppService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let columnsTitle = [
      'basic',
      'obligatory_diversifiable',
      'optional',
      'intensification'
    ];
    this.getSubjects(this.id_first_semester, '1', columnsTitle);
    columnsTitle = ['basic', '', 'optional', 'intensification'];
    this.getSubjects(this.id_second_semester, '2', columnsTitle);
    this.route.paramMap.subscribe(value => {
      let data: any = value;
      this.params = data.params;
    }).unsubscribe;
  }

  getNParams() {
    return Object.keys(this.params).length;
  }

  //Get all subjects from the spreadsheet and then push it to columnsData
  getSubjects(id: string, semester: string, columnsTitle: string[]) {
    this.columnsData = [];
    for (let i = 1; i <= 4; i++) {
      let subjects: Subject[] = [];
      this.spreadsheet.getJSON(id, i).subscribe(
        value => {
          let data: any = value;
          if (data.feed.entry !== undefined) {
            data.feed.entry.map(e => {
              subjects.push({
                code: e.gsx$codigo.$t,
                name: e.gsx$traduccionasignatura.$t,
                spreadsheetId: e.gsx$spreadsheetid.$t
              });
            });
          } else {
            //Column empty
          }
        },
        error => {
          console.log('Error');
          console.log(error);
        }
      );

      this.columnsData.push({
        name: columnsTitle[i - 1],
        subjects: subjects
      });
    }
    this.gradeData.push({
      name: semester,
      columns: this.columnsData
    });
  }

  toggleGroups(event: any, id: string) {
    let elem = event.target;
    //Selects the ul element for that target and get all CSS clasess
    let groups = elem.parentNode.parentNode.children[2];
    let classes = groups.className.split(' ');

    //If has show, we close it.
    if (classes.includes('show')) groups.classList.remove('show');
    //If it is closed but has already opened, then we add show class
    else if (groups.children.length != 0) groups.classList.add('show');
    //Get the data and create all necesary elements
    else {
      let loadingElem = elem.parentNode.parentNode.children[1];
      loadingElem.style.display = 'inherit';
      this.spreadsheet.getJSON(id, 1).subscribe(
        value => {
          let data: any = value;
          data.feed.entry.map(e => {
            if (e.gsx$grupos.$t) {
              let li = document.createElement('li');
              li.classList.add('subject__groups-hover');
              li.setAttribute('_ngcontent-c4', '');

              if (e.gsx$codigo !== undefined) {
                let span = document.createElement('span');
                span.classList.add('subject__code');
                span.setAttribute('_ngcontent-c4', '');
                span.innerHTML = e.gsx$codigo.$t + '-';
                li.appendChild(span);
              }
              let span = document.createElement('span');
              let text = this.translateService.translations[
                this.appService.currentLang
              ].grade.subjects[e.gsx$grupos.$t];

              span.innerHTML = text !== undefined ? text : e.gsx$grupos.$t;
              li.appendChild(span);
              groups.appendChild(li);
            }
          });
          loadingElem.style.display = 'none';
        },
        error => {
          console.log(error);

          let li = document.createElement('li');
          li.innerHTML = 'Parece que no hay grupos disponibles.';
          groups.appendChild(li);
          loadingElem.style.display = 'none';
        }
      ).unsubscribe;
      groups.classList.add('show');
    }
  }
}

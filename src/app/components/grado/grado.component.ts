import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpreadsheetsService } from '../../spreadsheets.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../app.service';
import { Columns, Subject, Semester } from '../../models';

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css', './subject-list.css']
})
export class GradoComponent implements OnInit {
  private id_first_semester = environment.spreadsheets.subjects.first_cuarter;
  private id_second_semester = environment.spreadsheets.subjects.second_cuarter;

  gradeData: Semester[] = [];
  columnsData: Columns[] = [];
  params: string[];

  currentElemsLoading: string[] = [];
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
      const data: any = value;
      this.params = data.params;
    });
  }

  getNParams() {
    return Object.keys(this.params).length;
  }

  // Get all subjects from the spreadsheet and then push it to columnsData
  getSubjects(id: string, semester: string, columnsTitle: string[]) {
    this.columnsData = [];
    for (let i = 1; i <= 4; i++) {
      const subjects: Subject[] = [];
      this.spreadsheet.getJSON(id, i).subscribe(
        value => {
          const data: any = value;
          if (data.feed.entry !== undefined) {
            data.feed.entry.map(e => {
              subjects.push({
                code: e.gsx$codigo.$t,
                name: e.gsx$traduccionasignatura.$t,
                spreadsheetId: e.gsx$spreadsheetid.$t
              });
            });
          } else {
            // Column empty
          }
        },
        error => {
          console.error(error);
        }
      );

      this.columnsData.push({
        name: columnsTitle[i - 1],
        subjects
      });
    }
    this.gradeData.push({
      semester,
      columns: this.columnsData
    });
  }

  async toggleGroups(event: any, id: string) {
    const elem = event.target;

    // Selects the ul element for that target and get all CSS clasess
    const groups = elem.parentNode.parentNode.children[2];

    const classes = groups.className.split(' ');

    // If has show, we close it.
    if (classes.includes('show')) {
      groups.classList.remove('show');
    } else if (groups.children.length !== 0) {
      // If it is closed but has already opened, then we add show class
      groups.classList.add('show');
    } else {
      if (this.currentElemsLoading.includes(elem.parentNode.parentNode)) {
        return;
      }
      this.currentElemsLoading.push(elem.parentNode.parentNode);
      // Get the data and create all necesary elements
      const loadingElem = elem.parentNode.parentNode.children[1];
      loadingElem.style.display = 'inherit';
      this.spreadsheet.getJSON(id, 1).subscribe(
        data => {
          data.feed.entry.map(e => {
            if (e.gsx$grupos.$t) {
              const li = document.createElement('li');
              li.setAttribute('_ngcontent-c4', '');

              let span;
              if (e.gsx$codigoasignatura.$t !== '') {
                span = `
                  <span _ngcontent-c4 class="subject__code">${
                    e.gsx$codigoasignatura.$t
                  }-</span>
                `;
                li.insertAdjacentHTML('beforeend', span);
              }

              const text = this.translateService.translations[
                this.appService.currentLang
              ].grade.subjects[e.gsx$grupos.$t];

              span = `<span _ngcontent-c4>${
                text !== undefined ? text : e.gsx$grupos.$t
              }</span>`;

              li.insertAdjacentHTML('beforeend', span);
              li.addEventListener('click', () => {
                this.selectSubject(id, e.gsx$hojaexcel.$t);
              });
              groups.appendChild(li);
            } else {
              const li = `<li _ngcontent-c4 class="subjects__error">No hay grupos disponibles.</li>`;
              groups.insertAdjacentHTML('beforeend', li);
            }
          });
          loadingElem.style.display = 'none';
          this.currentElemsLoading.splice(
            this.currentElemsLoading.indexOf(elem.parentNode.parentNode),
            1
          );
        },
        error => {
          console.error(error);

          loadingElem.style.display = 'none';

          const li = `<li _ngcontent-c4 class="subjects__error">¡Ha habido un error!.</li>`;

          groups.insertAdjacentHTML('beforeend', li);
          this.currentElemsLoading.splice(
            this.currentElemsLoading.indexOf(elem.parentNode.parentNode),
            1
          );
        }
      );
      groups.classList.add('show');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Columns, Subject, SpreadsheetData } from './grado.module';
import { SpreadsheetsService } from '../../spreadsheets.service';
@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css', './subject-list.css']
})
export class GradoComponent implements OnInit {
  private id: string = '1hmXByLguRRq8_Mcq50YbTyp0WzwlIKmQ8uEVYluwIhI';
  columnsTitle: string[] = [
    'basic',
    'diversifiable',
    'optional',
    'intensification'
  ];
  columnsData: Columns[] = [];

  constructor(private spreadsheet: SpreadsheetsService) {}

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    for (let i = 1; i <= 4; i++) {
      let subjects: Subject[] = [];
      this.spreadsheet.getJSON(this.id, i).subscribe(data: SpreadsheetData => {
        data.feed.entry.map(e => {
          subjects.push({
            code: e.gsx$codigo.$t,
            name: e.gsx$asignatura.$t,
            spreadsheetId: e.gsx$spreadsheetid.$t
          });
        });
      });

      this.columnsData.push({
        name: this.columnsTitle[i - 1],
        subjects: subjects
      });
    }
    console.log(this.columnsData);
  }

  toggleGroups(event: any) {
    let elem = event.target;
    let groups = elem.parentNode.parentNode.children[1];
    let classes = groups.className.split(' ');
    if (classes.includes('show')) groups.classList.remove('show');
    else groups.classList.add('show');
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpreadsheetsService } from '../../spreadsheets.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../app.service';
import { Type, GradeSubject, Quarter } from '../../models';

import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css', './subject-list.css']
})
export class GradoComponent implements OnInit {
  gradeData: Quarter[] = [];

  constructor(
    private spreadsheet: SpreadsheetsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.spreadsheet.gradeData$.subscribe(
      data => {
        console.log(data);
        this.gradeData = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  toggleGroups(event: any) {
    const groups = event.target.closest('.subject');
    groups.children[1].classList.toggle('show');
  }

  selectSubject(quarter: string, type: string, subject: string, group: string) {
    if (['basic', 'intensification'].includes(type)) {
      group = `grupo_${group}`;
    }

    this.router.navigate([
      'grado',
      `cuatrimestre_${quarter}`,
      type,
      subject,
      group
    ]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpreadsheetsService } from '../../spreadsheets.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../app.service';
import { Type, Subject, Quarter } from '../../models';

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css', './subject-list.css']
})
export class GradoComponent implements OnInit {
  private id_first_semester = environment.spreadsheets.subjects.firstCuarter;
  private id_second_semester = environment.spreadsheets.subjects.secondCuarter;

  gradeData: Quarter[] | Error = [];
  columnsData: Type[] = [];
  params: string[];

  currentElemsLoading: string[] = [];
  constructor(
    private spreadsheet: SpreadsheetsService,
    private translateService: TranslateService,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.gradeData = this.spreadsheet.getAllSubjects();

    this.route.paramMap.subscribe(value => {
      const data: any = value;
      this.params = data.params;
    });
  }

  getNParams() {
    return Object.keys(this.params).length;
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

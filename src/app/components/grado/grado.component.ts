import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpreadsheetsService } from '../../spreadsheets.service';
import { AppService } from '../../app.service';
import { Quarter } from '../../models';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css', './subject-list.css']
})
export class GradoComponent implements OnInit {
  gradeData: Quarter[] = [];

  constructor(
    private spreadsheet: SpreadsheetsService,
    private router: Router,
    private appService: AppService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.spreadsheet.gradeData$.subscribe(
      data => {
        this.gradeData = data;
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  small(): boolean {
    return this.appService.screenPX < 1462;
  }

  toggleGroups(event: any) {
    const groups = event.target.closest('.subject');
    groups.children[1].classList.toggle('show');
  }

  selectSubject(
    quarter: string,
    type: string,
    subject: string,
    group: string,
    code: string
  ) {
    if (['basica', 'intensificacion'].includes(type)) {
      group = `grupo_${group}`;
    }

    this.router.navigate([
      'grado',
      `cuatrimestre_${quarter}`,
      type,
      subject,
      group,
      code
    ]);
  }

  showSubject() {
    let show;
    this.activatedRoute.params.subscribe(p => {
      show = ![p.quarter, p.type, p.subject, p.group].includes(undefined);
    });
    return show;
  }
  leaveSubject(e) {
    const subject = e.target.closest('.table-content__subject');

    subject.querySelector('i').style.opacity = '0';
    // subject.querySelector('.table-content__subject-name').style.textDecoration =
    //  'inherit';
    subject.querySelector('.table-content__subject-name').style.backgroundSize =
      '0% 0%';
  }
  overSubject(e) {
    const subject = e.target.closest('.table-content__subject');
    subject.querySelector('i').style.opacity = '1';
    /*subject.querySelector('.table-content__subject-name').style.textDecoration =
      'underline';*/
    subject.querySelector('.table-content__subject-name').style.backgroundSize =
      '100% 100%';
  }
}

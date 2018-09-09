import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgProgress } from '@ngx-progressbar/core';
import { SpreadsheetsService } from '../../spreadsheets.service';
import { AppService } from '../../app.service';
import { Quarter } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css', './subject-list.css']
})
export class GradoComponent implements OnInit {
  gradeData: Quarter[] = [];
  currentQuarter: string;

  loading = false;

  widthLoadingBar: number;
  widthLoadingBar$: Observable<number>;

  constructor(
    private spreadsheet: SpreadsheetsService,
    private router: Router,
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    public progress: NgProgress
  ) {}

  ngOnInit() {
    this.progress.start();
    const month = new Date().getMonth();
    this.currentQuarter = month === 0 || month >= 8 ? '1' : '2';
    this.loadingBar();
    this.spreadsheet.gradeData$.subscribe(
      data => {
        this.gradeData = data;
        this.loading = true;

        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  loadingBar() {
    this.widthLoadingBar$ = this.appService.loadingBar$.gradeSubjects;
    this.widthLoadingBar$.subscribe(percentage => {
      this.widthLoadingBar =
        percentage < 25 || percentage === undefined ? 25 : percentage;
    });
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
      '0% 100%';
  }
  overSubject(e) {
    const subject = e.target.closest('.table-content__subject');
    subject.querySelector('i').style.opacity = '1';
    /*subject.querySelector('.table-content__subject-name').style.textDecoration =
      'underline';*/
    subject.querySelector('.table-content__subject-name').style.backgroundSize =
      '100% 100%';
  }

  toogleSubject(e) {
    const isAGroup = e.target.closest('.table-content__subjects-groups');
    if (isAGroup !== null) {
      return;
    }

    const subject = e.target.closest('.table-content__subject');
    const groups = subject.querySelector('.table-content__subjects-groups');
    const name = subject.querySelector('.table-content__subject-name');
    name.classList.toggle('open');
    const icon = subject.querySelector('i');
    icon.classList.toggle('open');
    icon.classList.toggle('rotate');
    groups.style.maxHeight =
      groups.style.maxHeight === '' ? `${groups.children.length * 32}px` : '';

    for (const group of groups.children) {
      if (['', '0'].includes(group.style.opacity)) {
        setTimeout(() => {
          group.style.opacity = 1;
        }, ((Array.prototype.slice.call(groups.children).indexOf(group) + 1) * 700) / groups.children.length);
      } else {
        setTimeout(() => {
          group.style.opacity = 0;
        }, 700 / (Array.prototype.slice.call(groups.children).indexOf(group) + 1) / groups.children.length);
      }
    }
  }
}

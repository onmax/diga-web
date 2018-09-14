import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpreadsheetsService } from '../../spreadsheets.service';
import { Quarter, SelectedSubject } from '../../models';
import { AppService } from '../../app.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnChanges {
  @Input()
  gradeData: Quarter[];

  subject: SelectedSubject;

  widthLoadingBar: number;
  widthLoadingBar$: Observable<number>;

  order = ['profesores', 'enlaces', 'avisos'];

  constructor(
    private spreadsheetsService: SpreadsheetsService,
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnChanges() {
    this.getSubject();
  }

  loadingBar() {
    this.widthLoadingBar$ = this.appService.loadingBar$.gradeSubject;
    this.widthLoadingBar$.subscribe(percentage => {
      this.widthLoadingBar = percentage;
    });
  }

  getSubject() {
    this.activatedRoute.params.subscribe(p => {
      this.subject = this.spreadsheetsService.getSubject(this.gradeData, p);
      if (this.subject === undefined) {
        setTimeout(() => {
          this.getSubject();
          return;
        }, 100);
      } else {
        this.getGroup();
        this.scrollToView();
      }
      console.log(this.subject);
    });
  }

  getGroup() {
    this.subject.groupMeta = this.spreadsheetsService.getGroup(
      this.subject.subject.spreadsheetId,
      this.subject.group.page
    );
  }

  scrollToView() {
    document
      .getElementById('subjectInfo')
      .scrollIntoView({ behavior: 'smooth' });
  }

  goTo(group: string) {
    this.activatedRoute.params.subscribe(p => {
      if (['basica', 'intensificacion'].includes(p.type)) {
        group = `grupo_${group}`;
        this.router.navigate([p.quarter, p.type, p.subject, group, '1']);
      }
      this.router.navigate([p.quarter, p.type, p.subject, group, p.code]);
    });
  }
}

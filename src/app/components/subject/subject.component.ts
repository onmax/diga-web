import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpreadsheetsService } from '../../spreadsheets.service';
import { Quarter, SelectedSubject } from '../../models';
import { AppService } from '../../app.service';
import { Observable } from 'rxjs';
import { _localeFactory } from '@angular/core/src/application_module';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css', '../../swiper.min.css']
})
export class SubjectComponent implements OnInit {
  @Input()
  gradeData: Quarter[];

  subject: SelectedSubject;

  widthLoadingBar: number;
  widthLoadingBar$: Observable<number>;

  order = ['profesores', 'enlaces', 'avisos'];

  loading: boolean;

  constructor(
    private spreadsheetsService: SpreadsheetsService,
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSubject();
  }

  getSubject() {
    this.loading = true;
    this.activatedRoute.params.subscribe(p => {
      this.subject = this.spreadsheetsService.getSubject(this.gradeData, p);
      if (this.subject === undefined) {
        setTimeout(() => {
          this.getSubject();
          return;
        }, 100);
      } else {
        this.getGroup();
        setTimeout(() => {
          this.scrollToView();
          document.querySelectorAll('.swiper-slide>span').forEach((span, i) => {
            (document.querySelectorAll('.swiper-slide')[i] as any).style.width =
              (span as any).offsetWidth + 'px';
          });
        });
        console.log('Información de asignatura:', this.subject);
      }
    });
  }

  getGroup() {
    this.subject.groupMeta = this.spreadsheetsService.getGroup(
      this.subject.subject.spreadsheetId,
      this.subject.group.page
    );
    setTimeout(() => {
      this.loading = false;
    }, 1500);
    console.log('Información del grupo', this.subject.groupMeta);
  }

  scrollToView() {
    document
      .getElementById('subjectInfo')
      .scrollIntoView({ behavior: 'smooth' });
  }

  goTo(group: string, code: string = '1') {
    this.activatedRoute.params
      // .pipe(take(1))
      .subscribe(p => {
        this.router.navigate([
          'grado',
          p.quarter,
          p.type,
          p.subject,
          group,
          code
        ]);
        setTimeout(() => {
          this.getSubject();
        }, 50);
      })
      .unsubscribe();
  }

  isLink(str: string): boolean {
    const regex = /(https?:\/\/|www)[^\s]+/gm;
    return regex.exec(str) !== null;
  }

  addHtpp(str: string): string {
    const regex = /(www)[^\s]+/gm;
    if (regex.exec(str) === null) {
      return str;
    } else {
      return 'http://' + str;
    }
  }
}

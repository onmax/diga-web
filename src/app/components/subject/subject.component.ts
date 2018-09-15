import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpreadsheetsService } from '../../spreadsheets.service';
import { Quarter, SelectedSubject } from '../../models';
import { take } from 'rxjs/operators';
import { AppService } from '../../app.service';
import { Observable, fromEventPattern } from 'rxjs';
import Swiper from 'swiper';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css', '../../swiper.min.css']
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
    this.activatedRoute.params.pipe(take(1)).subscribe(p => {
      this.subject = this.spreadsheetsService.getSubject(this.gradeData, p);
      if (this.subject === undefined) {
        setTimeout(() => {
          this.getSubject();
          return;
        }, 100);
      } else {
        this.getGroup();
        this.scrollToView();
        setTimeout(() => {
          const swiper = new Swiper('.groups__list', {
            spaceBetween: 5
          });
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
    console.log('Información del grupo', this.subject.groupMeta);
  }

  scrollToView() {
    document
      .getElementById('subjectInfo')
      .scrollIntoView({ behavior: 'smooth' });
  }

  goTo(group: string) {
    this.activatedRoute.params
      .pipe(take(1))
      .toPromise()
      .then(p => {
        if (['troncal', 'intensificacion'].includes(p.type)) {
          group = `grupo_${group}`;

          this.router.navigate([
            'grado',
            p.quarter,
            p.type,
            p.subject,
            group,
            '1'
          ]);
        } else {
          this.router.navigate([
            'grado',
            '/' + p.quarter,
            p.type,
            p.subject,
            group,
            p.code
          ]);
        }
      });
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

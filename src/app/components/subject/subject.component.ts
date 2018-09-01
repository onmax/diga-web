import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpreadsheetsService } from '../../spreadsheets.service';
import { environment } from '../../../environments/environment';
import { Quarter, GradeSubject } from '../../models';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnChanges {
  @Input()
  gradeData: Quarter[];

  subject: GradeSubject;
  constructor(
    private spreadsheetsService: SpreadsheetsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnChanges() {
    setTimeout(() => {
      this.getGroup();
    }, 500);
  }

  getGroup() {
    this.activatedRoute.params.subscribe(p => {
      this.subject = this.spreadsheetsService.getGroup(this.gradeData, p);
      console.log(this.subject);

      this.scrollToView();
    });
  }
  scrollToView() {
    document
      .getElementById('subjectInfo')
      .scrollIntoView({ behavior: 'smooth' });
  }
}

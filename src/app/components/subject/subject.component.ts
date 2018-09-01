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
export class SubjectComponent implements OnInit, OnChanges {
  @Input()
  infoLoaded$;

  @Input()
  gradeData: Quarter[];

  subject: GradeSubject;
  constructor(
    private spreadsheetsService: SpreadsheetsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getGroup();
    this.scrollToView();
  }

  ngOnChanges() {
    this.getGroup();
  }

  getGroup() {
    this.activatedRoute.params.subscribe(p => {
      this.subject = this.spreadsheetsService.getGroup(this.gradeData, p);
      this.scrollToView();
    });
  }
  scrollToView() {
    document
      .getElementById('subjectInfo')
      .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

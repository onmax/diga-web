import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpreadsheetsService } from '../../spreadsheets.service';
import { Quarter, SelectedSubject } from '../../models';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnChanges {
  @Input()
  gradeData: Quarter[];

  subject: SelectedSubject;
  constructor(
    private spreadsheetsService: SpreadsheetsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnChanges() {
    this.getGroup();
  }

  getGroup() {
    this.activatedRoute.params.subscribe(p => {
      this.subject = this.spreadsheetsService.getGroup(this.gradeData, p);
      if (this.subject === undefined) {
        setTimeout(() => {
          this.getGroup();
          return;
        }, 100);
      } else {
        this.scrollToView();
      }
      console.log(this.subject);
    });
  }
  scrollToView() {
    document
      .getElementById('subjectInfo')
      .scrollIntoView({ behavior: 'smooth' });
  }
}

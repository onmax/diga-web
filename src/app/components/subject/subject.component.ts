import { Component, OnInit, Input } from '@angular/core';
import { Semester } from '../grado/grado.module';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  @Input() gradeData: Semester[] = [];
  constructor() {}

  ngOnInit() {
    console.log(this.gradeData);
  }
}

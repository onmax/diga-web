import { Component, OnInit } from '@angular/core';

import { SpreadsheetsService } from '../../spreadsheets.service';

import { AllReports, Report } from '../../models';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {
  reportData: AllReports[];
  currentSelected = 0;
  constructor(private spreadsheetsService: SpreadsheetsService) {}

  ngOnInit() {
    this.spreadsheetsService.report$.subscribe(data => {
      this.reportData = data as any;
      this.reportData.sort(
        (a, b) =>
          parseInt(a.year.split('-')[0], 10) -
          parseInt(b.year.split('-')[0], 10)
      );
      console.log('Información de memoria', this.reportData);
    });
  }
}

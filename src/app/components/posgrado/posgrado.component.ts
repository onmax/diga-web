import { Component, OnInit } from '@angular/core';

import { SpreadsheetsService } from '../../spreadsheets.service';

import { Posgrade } from '../../models';

@Component({
  selector: 'app-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.css']
})
export class PosgradoComponent implements OnInit {
  posgradeData: Posgrade[];
  loading = false;

  currentSelected = 'titulos_universitarios';

  constructor(private spreadsheet: SpreadsheetsService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.spreadsheet.posgradeData$
      .subscribe(
        data => {
          this.posgradeData = data;
          this.loading = true;
          console.log('Información de posgrado', data);
        },
        error => {
          console.error(error);
        }
      )
      .unsubscribe();
  }

  leaveSubject(e) {
    e.target.style.backgroundSize = '0% 6%';
  }
  overSubject(e) {
    e.target.style.backgroundSize = '100% 6%';
  }
}

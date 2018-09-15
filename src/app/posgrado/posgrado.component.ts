import { Component, OnInit } from '@angular/core';
import { SpreadsheetsService } from '../spreadsheets.service';
import { Posgrade } from '../models';

interface Doctorado {
  nombre: string;
  links: object[];
  textolink: object[];
}
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
    this.spreadsheet.posgradeData$.subscribe(
      data => {
        this.posgradeData = data;
        this.loading = true;
        console.log('Información de posgrado', data);
      },
      error => {
        console.error(error);
      }
    );
  }
}

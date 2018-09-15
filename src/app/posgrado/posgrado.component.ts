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

  masterPropio: object[];
  masterUniversitario: object[];
  cursoEspecialista: object[];
  cursos: object[];
  doctorados: Doctorado[];

  constructor(private spreadsheet: SpreadsheetsService) {
    this.masterUniversitario = this.setInfo(1);
    this.masterPropio = this.setInfo(2);
    this.cursoEspecialista = this.setInfo(3);
    this.cursos = this.setInfo(4);
    this.doctorados = this.setDoctoradoInfo(5);
    this.spreadsheet.getPosgradeData();
  }

  setDoctoradoInfo(n: number): Doctorado[] {
    const arr = [];
    this.getJSON(n).then(json => {
      let doctorado: Doctorado = { nombre: '', links: [], textolink: [] };
      json.feed.entry.map(e => {
        if (e.gsx$nombre.$t !== '') {
          if (doctorado.nombre !== '') {
            arr.push(doctorado);
            doctorado = { nombre: '', links: [], textolink: [] };
          }
          doctorado.nombre = e.gsx$nombre.$t;
        }

        doctorado.textolink.push(e.gsx$textolink.$t);
        doctorado.links.push(e.gsx$link.$t);
      });
      if (doctorado !== undefined) {
        arr.push(doctorado);
      }
    });
    return arr;
  }
  setInfo(n: number): object[] {
    const arr = [];
    this.getJSON(n).then(json => {
      json.feed.entry.map(e => {
        arr.push({
          nombre: e.gsx$nombre.$t,
          link: e.gsx$link.$t
        });
      });
    });
    return arr;
  }
  async getJSON(n: number) {
    const id = '14-mht4UK7J7OmE-hGdHvXcfHaakGrIa3klLfG5H_ctE';
    const url = `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`;
    const data = await fetch(url);
    const json = await data.json();
    return json;
  }

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

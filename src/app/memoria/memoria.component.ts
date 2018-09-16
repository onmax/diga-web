import { Component, OnInit } from '@angular/core';
import { SpreadsheetsService } from '../spreadsheets.service';
import { log } from 'util';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {
  y2017_2018: Object;
  allyears: Object[];
  constructor(private spreadsheetsService: SpreadsheetsService) {
    this.y2017_2018 = {
      year: '2017-2018',
      dpto: 'link-pdf',
      grado: {
        troncal: [
          ['link-gda1', 'Geometría y Dibujo de Arquitectura 1'],
          ['link-dai1', 'Dibujo, Análisis e Ideación 1'],
          ['link', 'Geometría y Dibujo de Arquitectura 2']
        ],
        diversificable: [
          ['link-d2', 'Diseño gráfico I'],
          ['link-d1', 'Infografía'],
          ['', 'Arquitectura, luz, secuencia y color']
        ],
        optativas: [
          [
            'link-optativas1',
            'BIOMIMICRY, Naturaleza y Arquitectura. Green Buildings.'
          ],
          [
            'link-optativas1',
            'Formatos experimentales en comunicación audio/visual'
          ]
        ],
        intensificacion: [
          ['link-intensificacion', 'Intesificación en ideación gráfica']
        ]
      },
      posgrado: {
        master_universitario: [
          ['pdf', 'master_universitario_comunicacion'],
          ['pdf', 'master_universitario_conservacion']
        ],
        master_propio: [
          ['master_universitario', 'master_propio_efimeras'],
          ['pdf', 'master_propio_proyectos']
        ]
      }
    };

    this.allyears = [this.y2017_2018];
  }

  ngOnInit() {
    this.spreadsheetsService.report$.subscribe(data => {
      console.log(data);
    });
  }
}

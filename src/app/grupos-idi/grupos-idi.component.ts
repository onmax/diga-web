import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-idi',
  templateUrl: './grupos-idi.component.html',
  styleUrls: ['./grupos-idi.component.css']
})
export class GruposIdiComponent implements OnInit {
  idGroups: Object[] = [];
  constructor() {
    this.idGroups = [
      {
        nombre: 'Grupo i+d 1',
        integrantes: ['Persona 1', 'Person2'],
        img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
      },
      {
        nombre: 'Grupo i+d 2',
        integrantes: ['Persona 3', 'Persona 4'],
        img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
      },
      {
        nombre: 'Grupo i+d 3',
        integrantes: ['Persona 3', 'Persona 4'],
        img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
      }
    ];
  }

  ngOnInit() {}
}

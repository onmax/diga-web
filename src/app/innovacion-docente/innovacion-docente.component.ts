import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovacion-docente',
  templateUrl: './innovacion-docente.component.html',
  styleUrls: ['./innovacion-docente.component.css']
})
export class InnovacionDocenteComponent implements OnInit {
  idGroups: Object[] = [];
  constructor() {
    this.idGroups = [
      {
        nombre: 'Grupo Innovación Docente 1',
        integrantes: ['Persona 1', 'Person2'],
        img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
      },
      {
        nombre: 'Grupo Innovación Docente 1',
        integrantes: ['Persona 3', 'Persona 4'],
        img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
      }
    ];
  }

  ngOnInit() {}
}

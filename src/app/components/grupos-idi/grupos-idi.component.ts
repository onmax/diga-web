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
        nombre: 'Grupo 1',
        enlace: { href: '', texto: 'Enlace 1' },
        img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
      },
      {
        nombre: 'Grupo 2',
        enlace: { href: '', texto: 'Enlace 2' },
        img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
      },
      {
        nombre: 'Grupo 3',
        enlace: { href: '', texto: 'Enlace 3' },
        img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
      }
    ];
  }

  ngOnInit() {}
}

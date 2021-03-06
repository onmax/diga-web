import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../,,/../../../environments/environment';

import { Teachers } from '../../models';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  dir_sec = [
    {
      cargo: 'Director',
      nombreCompleto: 'Raposo Grau, Javier Francisco',
      imagen: ''
    },
    {
      cargo: 'Secretario académico',
      nombreCompleto: 'Martínez Díaz, Ángel',
      imagen: ''
    }
  ];
  secretaria = {
    nombre: 'Grano de Oro Manzano, Eloisa',
    cargo: 'Secretaria',
    correo: 'ideación.arquitectura@upm.es',
    tel: '91 067 50 50'
  };

  catedraticos: Teachers;
  titulares: Teachers;
  titulares_interinos: Teachers;
  titulares_escuela_universitaria: Teachers;
  titulares_escuela_universitaria_interinos: Teachers;
  contratados_doctores: Teachers;
  ayudantes_doctores: Teachers;
  asociados: Teachers;
  tecnico_laboratorio: Teachers;
  fullList: Teachers[] = [];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.fetchInfo();
    console.log(this.fullList);
    this.activatedRoute.params.subscribe(p => {
      const section = document.getElementById(p.section);
      window.scroll(0, section.offsetTop);
    });
  }
  async fetchInfo() {
    this.catedraticos = await this.teachers('catedraticos', 1);
    this.titulares = await this.teachers('titulares', 2);
    this.titulares_interinos = await this.teachers('titulares_interinos', 3);
    this.titulares_escuela_universitaria = await this.teachers(
      'titulares_escuela_universitaria',
      4
    );
    this.titulares_escuela_universitaria_interinos = await this.teachers(
      'titulares_escuela_universitaria_interinos',
      5
    );
    this.contratados_doctores = await this.teachers('contratados_doctores', 6);
    this.ayudantes_doctores = await this.teachers('ayudantes_doctores', 7);
    this.asociados = await this.teachers('asociados', 8);
    this.tecnico_laboratorio = await this.teachers('tecnico_laboratorio', 9);

    this.fullList = [
      this.catedraticos,
      this.titulares,
      this.titulares_interinos,
      this.titulares_escuela_universitaria,
      this.titulares_escuela_universitaria_interinos,
      this.contratados_doctores,
      this.ayudantes_doctores,
      this.asociados,
      this.tecnico_laboratorio
    ];
    console.log(this.fullList);
  }

  teachers(title: string, n: number): Teachers {
    const teachers: Teachers = { title, teachers: [] };
    const url = `https://spreadsheets.google.com/feeds/list/${
      environment.spreadsheets.teachers
    }/${n}/public/values?alt=json`;

    this.http.get<any>(url).subscribe(data => {
      const teachersRaw = data.feed.entry;
      teachersRaw.map(teacherRaw => {
        const teacher = {
          id: teacherRaw.gsx$id.$t,
          nombre: teacherRaw.gsx$nombre.$t,
          apellidos:
            teacherRaw.gsx$apellido1.$t + ' ' + teacherRaw.gsx$apellido2.$t,
          correo: teacherRaw.gsx$correo.$t,
          curriculum: teacherRaw.gsx$cv.$t,
          imagen: teacherRaw.gsx$imagenid.$t.replace('ñ', 'n'),
          link: teacherRaw.gsx$link.$t,
          docenteEn: teacherRaw.gsx$docencia.$t.split(',')
        };
        teachers.teachers.push(teacher);
      });
    });
    return teachers;
  }

  showCV(e) {
    const teacher = e.target.closest('.info-profesor');
    const cv = teacher.querySelector('.cv-profesor');
    cv.classList.toggle('cv-profesor__open');
  }

  showClasses(e) {
    const parent = e.target.closest('.more-info');
    const classes = parent.querySelector('.hidden-info');
    classes.classList.toggle('show-classes');
  }
  copy(email: string) {
    (navigator as any).clipboard
      .writeText(email)
      .then(() => {
        console.log('Email copied to clipboard');
      })
      .catch(err => {
        // This can happen if the user denies clipboard permissions:
        console.error('Could not copy text: ', err);
      });
  }
}

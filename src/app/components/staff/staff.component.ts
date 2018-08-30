import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../../models';
import { environment } from '../,,/../../../environments/environment';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  catedraticos: Teacher[];
  titulares: Teacher[];
  titulares_interinos: Teacher[];
  titulares_escuela_universitaria: Teacher[];
  titulares_escuela_universitaria_interinos: Teacher[];
  contratados_doctores: Teacher[];
  ayudantes_doctores: Teacher[];
  asociados: Teacher[];
  tecnico_laboratorio: Teacher[];
  fullList: Teacher[][];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchInfo();
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

  teachers(title: string, n: number): Teacher[] {
    const teachers = [];
    teachers.push({ title });
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
          imagen: teacherRaw.gsx$imagenid.$t,
          link: teacherRaw.gsx$link.$t,
          docenteEn: teacherRaw.gsx$docencia.$t.split(',')
        };
        teachers.push(teacher);
      });
    });
    return teachers;
  }
}

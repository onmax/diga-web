export interface Teacher {
  id: number;
  nombre: string;
  apellidos: string;
  correo: string;
  curriculum: string;
  imagen: string;
  link: string;
  docenteEn: Object[];
}
export interface SpreadsheetSubject {
  page: string;
  spreadsheetId: string;
}
export interface Semester {
  semester: string;
  columns: Columns[];
}
export interface Columns {
  name: string;
  subjects: Subject[];
}
export interface Subject {
  code: number;
  name: string;
  spreadsheetId: string;
}

export interface Groups {
  name: string;
  page: string;
}

export interface GeneralSubjectData {
  name: string;
  course: string;
  code: string;
  coordinator: string;
  description: string;
  bibliography: string[];
  groups: Groups[];
}

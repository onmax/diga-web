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
export interface Quarter {
  quarter: string;
  types: Type[];
}
export interface Type {
  type: string;
  subjects: Subject[];
}
export interface Subject {
  code: number;
  name: string;
  spreadsheetId: string;
  groups: Groups[];
}

export interface Groups {
  name: string;
  page: string;
  code: string;
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

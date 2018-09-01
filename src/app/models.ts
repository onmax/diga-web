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
export interface Quarter {
  quarter: string;
  types: Type[];
}
export interface Type {
  type: string;
  subjects: GradeSubject[];
}
export interface GradeSubject {
  code: number;
  name: string;
  spreadsheetId: string;
  groups: Group[];
  description: string;
  bibliography: string[];
  coordinator: string[];
  course: string;
}

export interface SelectedSubject {
  quarter: string;
  type: string;
  subject: GradeSubject;
  group: Group;
}

export interface Group {
  name: string;
  page: string;
  code: string;
}

export interface SubjectParams {
  quarter: string;
  type: string;
  subject: string;
  group: string;
}

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
  course: number;
  subjects: GradeSubject[];
}
export interface GradeSubject {
  code: number;
  name: string;
  spreadsheetId: string;
  groups: Group[];
  description: string;
  bibliography: string[];
  coordinator: string;
  course: string;
}

export interface Group {
  name: string;
  page: string;
  code: string;
}

export interface GroupMeta {
  teachers: string[];
}

export interface SelectedSubject {
  quarter: string;
  type: string;
  subject: GradeSubject;
  group: Group;
  groupMeta: GroupMeta;
}

export interface SubjectParams {
  quarter: string;
  type: string;
  subject: string;
  group: string;
}

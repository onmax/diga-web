// Staff
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
export interface Teachers {
  title: string;
  teachers: Teacher[];
}

// Grade
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
  links?: LinkList[];
}

export interface Group {
  name: string;
  page: string;
  code: string;
}

export interface GroupMeta {
  title: string;
  values: string[];
}

export interface SelectedSubject {
  quarter: string;
  type: string;
  subject: GradeSubject;
  group: Group;
  groupMeta: GroupMeta[];
}

export interface SubjectParams {
  quarter: string;
  type: string;
  subject: string;
  group: string;
}

// Posgrade
export interface Posgrade {
  title: string;
  studies: PosgradeStudies[];
}

export interface PosgradeStudies {
  title: string;
  options: PosgradeOptions[];
}
export interface PosgradeOptions {
  title: string;
  linkList: LinkList[];
  link: string;
}

export interface LinkList {
  text: string;
  url: string;
}

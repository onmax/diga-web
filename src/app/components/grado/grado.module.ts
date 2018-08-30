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
  spreadsheetId: string;
}

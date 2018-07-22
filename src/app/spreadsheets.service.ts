import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpreadsheetsService {
  constructor(private http: HttpClient) {}

  getJSON(id, n) {
    return this.http.get(
      `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`
    );
  }
}

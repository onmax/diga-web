import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpreadsheetsService {
  constructor(private http: HttpClient) {}

  getJSON(id, n) {
    console.log(
      `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`
    );

    return this.http.get<any>(
      `https://spreadsheets.google.com/feeds/list/${id}/${n}/public/values?alt=json`
    );
  }
}

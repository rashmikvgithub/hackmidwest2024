// app.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'https://api.example.com/data'; // Replace with your API URL

  constructor() { }

  http = inject(HttpClient);

  getData(prompt:string): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  backendUrl = 'http://localhost:8080/required-remainder';

  constructor(private http: HttpClient) {}

  getReminders(x: number, y: number, n: number) {
    const params = new HttpParams()
      .append('x', x.toString())
      .append('y', y.toString())
      .append('n', n.toString());
    return this.http.get(this.backendUrl, {
      params,
    });
  }
}

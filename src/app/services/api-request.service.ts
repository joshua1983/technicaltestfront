import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  backendUrl = 'http://localhost:8080/required-remainder';

  constructor(private http: HttpClient) {}

  getReminders(x: number, y: number, n: number) {
    return this.http.get(this.backendUrl, {
      params: {
        x,
        y,
        n,
      },
    });
  }
}

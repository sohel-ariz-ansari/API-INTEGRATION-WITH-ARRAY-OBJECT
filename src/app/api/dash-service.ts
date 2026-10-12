import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashService {
  private apiUrl = 'https://dummyjson.com/products';
  // private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private http = inject(HttpClient);

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

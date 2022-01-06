import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private readonly API: string = `${environment.API}`;
  constructor(private http: HttpClient) { }

  get() {
    console.log(this.API)
    return this.http.get<any>(`${this.API}tasks`)
  }
  create(item: object) {
    return this.http.post<any>(`${this.API}tasks`, item)
  }
}

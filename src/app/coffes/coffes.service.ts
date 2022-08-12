import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffe } from './coffes';
const api = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CoffesService {
  constructor(private Http: HttpClient) {}

  listUser(userName: string): Observable<Coffe> {
    return this.Http.get<any>(`${api}/${userName}/photos`);
  }
}

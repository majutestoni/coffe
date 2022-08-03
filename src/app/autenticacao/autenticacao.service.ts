import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../users';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private listUsers: any[];

  constructor(private httpClient: HttpClient) {
    this.listUsers = [];
  }
  private url = 'http://localhost:3000/users';

  autenticar(userName: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users', {
      userName: userName,
      password: password,
    });
  }

  get items() {
    return this.listUsers;
  }

  getUser(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.url);
  }
}

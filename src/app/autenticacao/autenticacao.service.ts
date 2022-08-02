import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../users';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) {}
  private url = 'http://localhost:3000/users'

  autenticar(userName: string, password: string): Observable<any>{
return this.httpClient.post('http://localhost:3000/users', {
  userName: userName,
  password: password
})
  }

  getUser(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.url)
  }
}

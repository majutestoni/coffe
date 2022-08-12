import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../users';
import { UserService } from './user/user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private listUsers: any[];

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {
    this.listUsers = [];
  }
  private url = 'http://localhost:3000/users';

  autenticar(
    email: string,
    userName: string,
    password: string
  ): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:3000/users',
        {
          email: email,
          userName: userName,
          password: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-tpken') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }

  get items() {
    return this.listUsers;
  }

  getUser(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.url);
  }
}

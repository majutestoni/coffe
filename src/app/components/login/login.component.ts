import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  textPasswordRequired = 'A senha é obrigatória!';
  textUserNameRequired = 'O login é obrigatória!';
  userName = '';
  password = '';
  public listUsers: Users[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AutenticacaoService
  ) {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.listUsers = this.authService.items;
    this.authService.getUser().subscribe((retorno) => {
      this.listUsers = retorno.map((item) => {
        console.table(item);
        return new Users(item.id, item.userName, item.password);
      });
    });

    //  this.authService.getUser().subscribe((items: Users[]) => {
    //    console.table(items);
    //    this.listUsers = items;
    //  });
  }

  login() {
    for (let i = 0; i < this.listUsers.length; i++) {
      if (
        this.userName === this.listUsers[i].userName &&
        this.password === this.listUsers[i].password
      ) {
        console.log('logado');
      } else {
        console.log('errado');
      }
    }
  }
}

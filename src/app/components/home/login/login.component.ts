import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  textPasswordRequired = 'A senha é obrigatória!';
  textUserNameRequired = 'O login é obrigatória!';
  userName = ''
  password = ''

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AutenticacaoService) {
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
  }

  login() {
    this.authService.autenticar(this.userName, this.password).subscribe(() => {
      console.log('autenticado')
    }, (err) => {
      alert('usuario invalido')
      console.log(err)
    })
  }
}

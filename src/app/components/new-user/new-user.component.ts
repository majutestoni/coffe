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
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  newForm: FormGroup;
  listUsers: Users[] = [];

  password = '';
  userName = '';
  email = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {
    this.newForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.newForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.authService.getUser().subscribe((items: Users[]) => {
      console.table(items);
      this.listUsers = items;
    });
  }

  newUser() {
    this.authService.autenticar(this.email,this.userName, this.password).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      (err) => {
        console.log(err);
        this.userName = '';
        this.password = '';
        this.email = '';
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService
  ) {
    this.newForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.newForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.authService.getUser().subscribe((items: Users[]) => {
      console.table(items);
      this.listUsers = items;
    });
  }

  newUser() {
    this.authService.autenticar(this.userName, this.password).subscribe(
      () => {
        console.log('autenticado');
        this.userName = ''
        this.password = ''
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

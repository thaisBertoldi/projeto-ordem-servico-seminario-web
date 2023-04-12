import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  emailDB: string = 'email@teste.com';
  senhaDB: string = '12345678';
  showView: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snack: MatSnackBar
  ) {
    this.criarForm();
    this.showView = true;
  }

  ngOnInit(): void {
      if (sessionStorage.getItem('login')) {
        this.router.navigate(['/']);
      }
  }

  criarForm() {
    this.form = this.formBuilder.group({
      email: [''],
      senha: [''],
    });
  }

  login() {
    if (this.form.get('email')?.value == this.emailDB && this.form.get('senha')?.value == this.senhaDB) {
      sessionStorage.setItem('login', 'logado');
      this.showView = false;
      this.router.navigate(["/"]);
    } else {
      this.snack.open(`${'Login incorreto'}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 4000
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cpfDB: String;
  passwordDB: String | undefined;
  showView: Boolean;
  showRegister: Boolean;
  categorySelect: String;
  hasType: String;
  showPassword: Boolean = false;
  typePassword: String = 'password';

  category = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  person: Person = {
    id: '',
    name: '',
    cpf: '',
    phone: '',
    type: '',
    password: '',
  };

  name = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  phone = new FormControl('', [Validators.minLength(11)]);
  type = new FormControl('');
  password = new FormControl('', [Validators.minLength(6)]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snack: MatSnackBar,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private personService: PersonService
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
      cpf: [''],
      password: [''],
    });
  }
  
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.typePassword = this.showPassword ? 'text' : 'password';
  }

  criarFormRegister() {
    this.form = this.formBuilder.group({
      name: [''],
      cpf: [''],
      phone: [''],
      type: [''],
      password: [''],
    });
  }

  login() {
    this.personService
      .findByCPF(this.form.get('cpf')?.value)
      .subscribe((res) => {
        if (res && res.password === this.form.get('password')?.value) {
          sessionStorage.setItem('type', res.type.toString());
          sessionStorage.setItem('login', 'logado');
          this.showView = false;
          this.router.navigate(['/home']);
        } else {
          this.snack.open(`${'Login incorreto'}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 4000,
          });
        }
      }, (err) => {
        this.snack.open(`${'CPF não cadastrado'}`, 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 4000,
        });
      });
  }

  toggleRegister() {
    this.showRegister = !this.showRegister;
    this.criarFormRegister();
  }

  cancel(): void {
    this.toggleRegister();
  }

  selectCategory(event: Event) {
    this.categorySelect = event.toString();
    this.hasType = "hasType";
  }

  create(): void {
    const service =
      this.categorySelect === 'employee'
        ? this.employeeService
        : this.customerService;
    service.create(this.person).subscribe(
      (resposta) => {
        service.message('Usuário criado com sucesso!');
        this.toggleRegister();
        this.toggleShow();
      },
      (err) => {
        service.message(err.error.message);
        if (err.error.message?.match('já cadastrado')) {
          service.message(err.error?.message);
        } else if (
          err.error.errors[0]?.message ===
          'número do registro de contribuinte individual brasileiro (CPF) inválido'
        ) {
          service.message('CPF inválido');
        }
      }
    );
  }

  errorValidName() {
    if (this.name.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return null;
  }

  errorValidCPF() {
    if (this.cpf.invalid) {
      return 'O cpf deve ter 11 caracteres!';
    }
    return null;
  }

  errorValidPhone() {
    if (this.phone.invalid) {
      return 'O telefone deve ter 11 caracteres!';
    }
    return null;
  }
}

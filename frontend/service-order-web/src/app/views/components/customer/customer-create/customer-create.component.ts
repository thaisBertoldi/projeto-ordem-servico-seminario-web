import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent {

  cliente: Person = {
    id: "",
    name: "",
    cpf: "",
    phone: "",
    type: ""
  };

  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  phone = new FormControl('', [Validators.minLength(11)])

  constructor(
    private router: Router,
    private service: CustomerService
  ) {}

  cancel(): void {
    this.router.navigate(["/customer"]);
  }

  create(): void {
    this.service.create(this.cliente).subscribe(
      (resposta) => {
        this.router.navigate(["/customer"]);
        this.service.message("Cliente criado com sucesso!");
      },
      (err) => {
        if (err.error?.message.match("já cadastrado")) {
          this.service.message(err.error?.message);
        } else if(err.error?.errors[0]?.message === "número do registro de contribuinte individual brasileiro (CPF) inválido"){
          this.service.message("CPF inválido");
        }
      }
    );
  }

  errorValidName() {
    if(this.name.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return null;
  }

  errorValidCPF() {
    if(this.cpf.invalid) {
      return 'O cpf deve ter 11 caracteres!';
    }
    return null;
  }

  errorValidPhone() {
    if(this.phone.invalid) {
      return 'O telefone deve ter 11 caracteres!';
    }
    return null;
  }

}

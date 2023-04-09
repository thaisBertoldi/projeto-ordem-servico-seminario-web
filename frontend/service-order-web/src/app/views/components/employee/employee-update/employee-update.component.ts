import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/Interfaces';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id_tec = '';

  tecnico: Person = {
    id: "",
    name: "",
    cpf: "",
    phone: "",
  };

  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  phone = new FormControl('', [Validators.minLength(11)])

  constructor(
    private router: Router,
    private service: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update():void {
    this.service.update(this.tecnico).subscribe(resposta => {
      this.router.navigate(["/employee"]);
      this.service.message('Técnico atualizado com sucesso !');
    },(err) => {
      if (err.error.message.match("já cadastrado")) {
        this.service.message(err.error.message);
      } else if(err.error.errors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido"){
        this.service.message("CPF inválido");
      }
    })
  }

  findById(): void {
    this.service.findById(this.id_tec).subscribe(resposta => {
      this.tecnico = resposta;
    })
  }

  cancel(): void {
    this.router.navigate(["/employee"]);
  }

  errorValidName() {
    if (this.name.invalid) {
      return "O nome deve ter entre 5 e 100 caracteres!";
    }
    return null;
  }

  errorValidCPF() {
    if (this.cpf.invalid) {
      return "O cpf deve ter 11 caracteres!";
    }
    return null;
  }

  errorValidPhone() {
    if (this.phone.invalid) {
      return "O telefone deve ter 11 caracteres!";
    }
    return null;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OS, Person } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ServiceOrderService } from 'src/app/services/serviceorder.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {

  os: OS = {
    employee: '',
    customer: '',
    observations: '',
    status: '',
    priority: ''
  }

  employees: Person[] = [];
  customers: Person[] = [];

  constructor(
    private employeeService: EmployeeService,
    private customerService: CustomerService,
    private osService: ServiceOrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarTecnicos();
    this.listarClientes();
  }

  listarTecnicos(): void {
    this.employeeService.findAll().subscribe(resposta => {
      this.employees = resposta;
    })
  }

  listarClientes(): void {
    this.customerService.findAll().subscribe(resposta => {
      this.customers = resposta;
    })
  }

  create(): void {
    this.osService.create(this.os).subscribe(resposta => {
      this.osService.message("Ordem de serviço criada com  sucesso !");
      this.router.navigate(['service-order']);
    })
  }

  cancel(): void {
    this.router.navigate(["service-order"]);
  }
}

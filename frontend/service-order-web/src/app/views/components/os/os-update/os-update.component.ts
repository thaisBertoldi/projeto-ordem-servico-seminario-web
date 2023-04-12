import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OS, Person } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ServiceOrderService } from 'src/app/services/serviceorder.service';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.listarTecnicos();
    this.listarClientes();
  }

  findById(): void {
    this.osService.findById(this.os.id).subscribe(resposta => {
      this.os = resposta;
      this.converteDados();
    })
  }

  update(): void {
    this.osService.update(this.os).subscribe(resposta => {
      this.osService.message("Ordem de serviço atualizada com  sucesso !");
      this.router.navigate(['service-order']);
    })
  }

  cancel(): void {
    this.router.navigate(['service-order']);
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

  converteDados(): void {
    if(this.os.status == 'ABERTO') {
      this.os.status = 0;
    } else if(this.os.status == 'ANDAMENTO') {
      this.os.status = 1;
    } else {
      this.os.status = 2;
    }

    if(this.os.priority == 'BAIXA') {
      this.os.priority = 0;
    } else if(this.os.priority == 'MEDIA') {
      this.os.priority = 1;
    } else {
      this.os.priority = 2;
    }
  }

}

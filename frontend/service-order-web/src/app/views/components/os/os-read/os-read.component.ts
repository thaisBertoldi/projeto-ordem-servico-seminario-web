import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ModalService } from 'src/app/services/modal.service';
import { ServiceOrderService } from 'src/app/services/serviceorder.service';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit {
  loading: Boolean;
  newOrder: OS;
  isCustomer: Boolean;
  isEmployee: Boolean;
  isOpen: Boolean;
  
  ordensServico: OS[] = [];

  displayedColumns: string[] = ['employee', 'customer', 'openingDate', 'priority', 'status', 'action', 'changeStatus'];
  dataSource = new MatTableDataSource<OS>(this.ordensServico);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : ServiceOrderService,
    private router:Router,
    private employeeService: EmployeeService,
    private customerService: CustomerService,
    private modal: ModalService
  ) {
    this.loading = true;
  }

  ngAfterViewInit() {    
    this.findAll();
    const type = sessionStorage.getItem('type')
    if (type === 'customer') {
      this.isCustomer = true;
    } else if (type === 'employee') {
      this.isEmployee = true;
    }
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(order => {
        if(order.status !== 'ENCERRADO') {
          this.ordensServico.push(order);
        }

        if(order.status === 'ABERTO'){
          this.isOpen = true;
        } else {
          this.isOpen = false;
        }
      });
      this.loading = false;
      this.listarTecnico();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OS>(this.ordensServico);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['service-order/create'])
  }

  listarTecnico():void {
    this.ordensServico.forEach(os => {
      this.employeeService.findById(os.employee).subscribe(resposta => {
        os.employee = resposta.name
      })
    })
  }

  listarCliente():void {
    this.ordensServico.forEach(os => {
      this.customerService.findById(os.customer).subscribe(resposta => {
        os.customer = resposta.name
      })
    })
  }

  prioridade(prioridade : any) {
    if(prioridade == "BAIXA") {
      return 'baixa'
    } else if(prioridade == 'MEDIA') {
      return 'media'
    } else {
      return 'alta'
    }
  }

  openModal(id: Number): void {
    this.modal.encerrar(id);
  }

  openModalUpdate(id: Number): void {
    this.modal.atualizar(id)
  }

}

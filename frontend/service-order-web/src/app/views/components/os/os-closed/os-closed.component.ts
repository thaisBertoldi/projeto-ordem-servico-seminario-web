import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ServiceOrderService } from 'src/app/services/serviceorder.service';

@Component({
  selector: 'app-os-closed',
  templateUrl: './os-closed.component.html',
  styleUrls: ['./os-closed.component.css']
})
export class OsClosedComponent implements AfterViewInit {
  loading: Boolean;

  ordensServico: OS[] = [];

  displayedColumns: string[] = ['employee', 'customer', 'openingDate', 'closingDate', 'priority', 'status'];
  dataSource = new MatTableDataSource<OS>(this.ordensServico);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : ServiceOrderService,
    private router: Router,
    private employeeService: EmployeeService,
    private customerService: CustomerService
    ) {
      this.loading = true;
    }

  ngAfterViewInit() {    
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(x => {
        if(x.status == 'ENCERRADO') {
          this.ordensServico.push(x)
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
    this.router.navigate(['os/create'])
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

}
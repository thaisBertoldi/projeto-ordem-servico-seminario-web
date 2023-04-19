import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css'],
})
export class CustomerReadComponent implements AfterViewInit {
  loading: Boolean;

  clientes: Person[] = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone'];
  dataSource = new MatTableDataSource<Person>(this.clientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: CustomerService) {
    this.loading = true;
  }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.loading = false;
      this.clientes = resposta;
      this.dataSource = new MatTableDataSource<Person>(this.clientes);
      this.dataSource.paginator = this.paginator;
    });
  }
}

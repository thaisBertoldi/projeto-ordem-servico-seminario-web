import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/models/Interfaces';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements AfterViewInit {
  employees: Person[] = [];
  loading: Boolean;

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone'];
  dataSource = new MatTableDataSource<Person>(this.employees);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : EmployeeService,
  ) {
    this.loading = true;
  }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe(
      (res) => {
        setTimeout(() => {
          this.loading = false;
        }, 3000);
        this.employees = res;
        this.dataSource = new MatTableDataSource<Person>(this.employees);
        this.dataSource.paginator = this.paginator;
      }, (err) => {
      console.log(err);
    })
  }

}
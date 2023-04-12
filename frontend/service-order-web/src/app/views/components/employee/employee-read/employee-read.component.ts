import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Interfaces';
import { EmployeeService } from 'src/app/services/employee.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements AfterViewInit {
  employees: Person[] = [];
  loading: Boolean;

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone', 'action'];
  dataSource = new MatTableDataSource<Person>(this.employees);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : EmployeeService,
    private router: Router,
    private modal: ModalService
  ) {
    this.loading = true;
  }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe(
      (res) => {
        this.loading = false;
        this.employees = res;
        this.dataSource = new MatTableDataSource<Person>(this.employees);
        this.dataSource.paginator = this.paginator;
      }, (err) => {
      console.log(err);
    })
  }

  navigateToCreate():void {
    this.router.navigate(['employee/create'])
  }

  openModal(id: Number, person: String): void {
    this.modal.open(id, person);
  }
}
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements AfterViewInit {
  employees: Employee[] = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone', 'action'];
  dataSource = new MatTableDataSource<Employee>(this.employees);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : EmployeeService,
    private router: Router,
    private modal: ModalService
  ) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe(
      (res) => {
        this.employees = res;
        this.dataSource = new MatTableDataSource<Employee>(this.employees);
        this.dataSource.paginator = this.paginator;
      }, (err) => {
      console.log(err);
    })
  }

  navigateToCreate():void {
    this.router.navigate(['employee/create'])
  }

  openModal(id: Number): void {
    this.modal.open(id);
  }
}
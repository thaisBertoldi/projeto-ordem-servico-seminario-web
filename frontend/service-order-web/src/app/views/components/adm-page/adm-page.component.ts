import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-adm-page',
  templateUrl: './adm-page.component.html',
  styleUrls: ['./adm-page.component.css']
})
export class AdmPageComponent implements OnInit {
  loading: Boolean;

  users: Person[] = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone', 'type', 'action'];
  dataSource = new MatTableDataSource<Person>(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private customerService : CustomerService,
    private employeeService : EmployeeService,
    private router: Router,
    private modal: ModalService
  ) {
    this.loading = true;
  }
  
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.customerService.findAll().subscribe((res) => {
      res.forEach(user => {
        this.users.push(user);
      })
      this.employeeService.findAll().subscribe(
        (res) => {
          res.forEach(user => {
            this.users.push(user);
          });
          this.loading = false;
          this.dataSource = new MatTableDataSource<Person>(this.users);
          this.dataSource.paginator = this.paginator;
        }, (err) => {
        console.log(err);
      })
    })
  }

  openModal(id: Number, person: String): void {
    this.modal.open(id, person);
  }

  update(id: Number, type: String) {
    this.router.navigate([`${type}/update/${id}`]);
  }
}

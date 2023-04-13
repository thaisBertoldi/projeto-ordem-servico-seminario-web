import { Component, OnInit } from '@angular/core';
import { OS, Person } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ServiceOrderService } from 'src/app/services/serviceorder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberEmployees: Number;
  employees: Number;
  openOS: number = 0;
  closedOS: number = 0;
  customers: Number;

  constructor(
    private serviceOrder: ServiceOrderService,
    private employeeService: EmployeeService,
    private customerService: CustomerService
  ) { 
    this.getOrders();
    this.getAllCustomers();
    this.getAllEmployees();
  }

  ngOnInit(): void {

  }

  getOrders() {
    this.serviceOrder.findAll().subscribe(resp => {
      resp.forEach(order => {
        if (order.status === "ANDAMENTO" || order.status === "ABERTO") {
          this.openOS += 1;
        } else {
          this.closedOS += 1;
        }
      })
    });
  }

  getAllEmployees() {
    this.employeeService.findAll().subscribe(resp => {
      this.employees = resp.length;
    });
  }

  getAllCustomers() {
    this.customerService.findAll().subscribe(resp => {
      this.customers = resp.length;
    });
  }
}

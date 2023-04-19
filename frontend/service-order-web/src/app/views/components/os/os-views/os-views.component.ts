import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OS } from 'src/app/models/Interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ServiceOrderService } from 'src/app/services/serviceorder.service';

@Component({
  selector: 'app-os-views',
  templateUrl: './os-views.component.html',
  styleUrls: ['./os-views.component.css'],
})
export class OsViewsComponent implements OnInit {
  customer: String;
  employee: String;

  os: OS = {
    priority: '',
    observations: '',
    status: '',
    employee: '',
    customer: '',
  };

  constructor(
    private route: ActivatedRoute,
    private service: ServiceOrderService,
    private router: Router,
    private customerService: CustomerService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.os.id).subscribe((resposta) => {
      this.os = resposta;
      this.customerService.findById(resposta.customer).subscribe((customer) => {
        this.customer = customer.name;
      });
      this.employeeService.findById(resposta.employee).subscribe((employee) => {
        this.employee = employee.name;
      })
    });
  }

  return(): void {
    this.router.navigate(['/service-order']);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeReadComponent } from './views/components/employee/employee-read/employee-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { EmployeeCreateComponent } from './views/components/employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './views/components/employee/employee-update/employee-update.component';
import { CustomerReadComponent } from './views/components/customer/customer-read/customer-read.component';
import { CustomerCreateComponent } from './views/components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './views/components/customer/customer-update/customer-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'employee',
    component: EmployeeReadComponent
  },{
    path: 'employee/create',
    component: EmployeeCreateComponent
  },{
    path: 'employee/update/:id',
    component: EmployeeUpdateComponent
  },{
    path: 'customer',
    component: CustomerReadComponent
  },{
    path: 'customer/create',
    component: CustomerCreateComponent
  },{
    path: 'customer/update/:id',
    component: CustomerUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

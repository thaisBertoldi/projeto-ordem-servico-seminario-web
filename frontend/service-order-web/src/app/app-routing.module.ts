import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeReadComponent } from './views/components/employee/employee-read/employee-read.component';
import { HomeComponent } from './views/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'employee',
    component: EmployeeReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

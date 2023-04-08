import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/template/header/header.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/components/home/home.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { EmployeeReadComponent } from './views/components/employee/employee-read/employee-read.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCreateComponent } from './views/components/employee/employee-create/employee-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from './views/components/employee/employee-update/employee-update.component';
import { ModalDeleteComponent } from './views/components/modal-delete/modal-delete.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EmployeeReadComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

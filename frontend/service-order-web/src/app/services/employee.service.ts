import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar
  ) { }

  findAll():Observable<Person[]> {
    const url = this.baseUrl + "/tecnicos";
    return this.http.get<Person[]>(url);
  }

  
  create(employee: Person):Observable<Person> {
    const url = this.baseUrl + "/tecnicos";
    return this.http.post<Person>(url, employee);
  }

  message(msg : string) : void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

  findById(id : any):Observable<Person> {
    const url = `${this.baseUrl}/tecnicos/${id}`
    return this.http.get<Person>(url);
  }

  update(tecnico: Person):Observable<Person> {
    const url = `${this.baseUrl}/tecnicos/${tecnico.id}`;
    return this.http.put<Person>(url, tecnico);
  }

  delete(id: any):Observable<void> {
    const url = `${this.baseUrl}/tecnicos/${id}`;
    return this.http.delete<void>(url);
  }

}

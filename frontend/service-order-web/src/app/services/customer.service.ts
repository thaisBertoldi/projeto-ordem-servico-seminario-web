import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar
    ) { }

  findAll():Observable<Person[]> {
    const url = this.baseUrl + "/clientes";
    return this.http.get<Person[]>(url);
  }

  delete(id: any):Observable<void> {
    const url = `${this.baseUrl}/clientes/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg : string) : void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

  findById(id : any):Observable<Person> {
    const url = `${this.baseUrl}/clientes/${id}`
    return this.http.get<Person>(url);
  }

  create(customer: Person):Observable<Person> {
    const url = this.baseUrl + "/clientes";
    return this.http.post<Person>(url, customer);
  }

  update(customer: Person):Observable<Person> {
    const url = `${this.baseUrl}/clientes/${customer.id}`;
    return this.http.put<Person>(url, customer);
  }

}
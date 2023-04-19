import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar
  ) { }

  findByCPF(cpf: String): Observable<Person> {
    const url = `${this.baseUrl}/person/cpf/${cpf}`;
    return this.http.get<Person>(url);
  }
}

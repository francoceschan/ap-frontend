import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // Esta url obtiene un listado de estudios
  private baseURL = "http://localhost:8080/api/persona";
  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  })

  constructor(private httpClient : HttpClient) { }

  obtenerPersona() : Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}`,{ headers: this.reqHeaders })
  }

  modificarPersona(id:string, persona:Persona):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,persona,{ headers: this.reqHeaders });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  // Esta url obtiene un listado de estudios
  private baseURL = "http://localhost:8080/api/proyecto";
  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  })

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeProyectos():Observable<Proyecto[]>{
    
    return this.httpClient.get<Proyecto[]>(`${this.baseURL}`);
  }

  registrarProyecto(proyecto:Proyecto) : Observable<Object>{


    return this.httpClient.post(`${this.baseURL}/guardar`,proyecto, { headers: this.reqHeaders })

  }

  eliminarProyecto(id:string) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ headers: this.reqHeaders })
  }

  obtenerProyectoPorId(id:string) : Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(`${this.baseURL}/${id}`,{ headers: this.reqHeaders })
  }

  modificarProyecto(id:string, proyecto:Proyecto):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,proyecto,{ headers: this.reqHeaders });
  }
}

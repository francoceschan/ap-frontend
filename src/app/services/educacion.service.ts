import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  // Esta url obtiene un listado de estudios
  private baseURL = "http://localhost:8080/api/educacion";
  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  })
  

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeEstudios():Observable<Educacion[]>{
    
    return this.httpClient.get<Educacion[]>(`${this.baseURL}`);
  }

  registrarEstudio(educacion:Educacion) : Observable<Object>{


    return this.httpClient.post(`${this.baseURL}/guardar`,educacion, { headers: this.reqHeaders })

  }

  eliminarEstudio(id:string) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ headers: this.reqHeaders })
  }

  obtenerEstudioPorId(id:string) : Observable<Educacion>{
    return this.httpClient.get<Educacion>(`${this.baseURL}/${id}`)
  }

  modificarEstudio(id:string, educacion:Educacion):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,educacion,{ headers: this.reqHeaders });
  }
}

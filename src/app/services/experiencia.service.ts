import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  // Esta url obtiene un listado de estudios
  private baseURL = "http://localhost:8080/api/experiencia";
  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  })
  

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeExperiencias():Observable<Experiencia[]>{
    
    return this.httpClient.get<Experiencia[]>(`${this.baseURL}`);
  }

  registrarExperiencia(experiencia:Experiencia) : Observable<Object>{

    return this.httpClient.post(`${this.baseURL}/guardar`,experiencia, { headers: this.reqHeaders })

  }

  eliminarExperiencia(id:string) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ headers: this.reqHeaders })
  }

  obtenerExperienciaPorId(id:string) : Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(`${this.baseURL}/${id}`, { headers: this.reqHeaders })
  }

  modificarExperiencia(id:string, experiencia:Experiencia):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,experiencia,{ headers: this.reqHeaders });
  }
}

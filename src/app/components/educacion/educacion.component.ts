import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EducacionService } from '../../services/educacion.service';
import { LoginState } from '../login/state/login.state';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Select(LoginState.getIsAuthenticated) isAuthenticated$ : Observable<boolean>;

  @Input() id:string;
  @Input() institucion:string;
  @Input() titulo:string;
  @Input() fechaInicio:string;
  @Input() fechaFin:string;
  isAuthenticated : boolean;

  constructor(
    private educacionService:EducacionService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    })

    let fecha:Date;
    let mes: number;
    let anio: string;

    fecha=new Date(this.fechaInicio)
    mes=fecha.getMonth()+1
    anio=fecha.getFullYear().toString()

    this.fechaInicio = mes.toString()+" / "+anio

    fecha=new Date(this.fechaFin)
    mes=fecha.getMonth()+1
    anio=fecha.getFullYear().toString()
    this.fechaFin = mes.toString()+" / "+anio
  }

  eliminarEstudio(id:string){

    if(this.isAuthenticated){

      this.educacionService.eliminarEstudio(id).subscribe(dato => { 
      }, error => console.log(error)); 
      
    }
    
  }

  modificarEstudio(id:string){
    this.router.navigate([`/registrar-educacion/${id}`])
  }

  
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { LoginState } from '../login/state/login.state';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  @Select(LoginState.getIsAuthenticated) isAuthenticated$ : Observable<boolean>;

  @Input() id:string;
  @Input() institucion:string;
  @Input() titulo:string;
  @Input() fechaInicio:string;
  @Input() fechaFin:string;
  
  isAuthenticated : boolean = false;
  

  constructor(
    private experienciaService: ExperienciaService,
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

  eliminarExperiencia(id:string){
    this.experienciaService.eliminarExperiencia(id).subscribe(dato => {
      console.log(dato);
    }, error => console.log(error));

    
  }

  modificarExperiencia(id:string){
    this.router.navigate([`/registrar-experiencia/${id}`])
  }

}

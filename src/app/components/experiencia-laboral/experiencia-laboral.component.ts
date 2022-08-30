import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { LoginState } from '../login/state/login.state';
import { ConfirmationService } from 'primeng/api';

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
  
  @Output() actualizarExperiencias = new EventEmitter();
  
  isAuthenticated : boolean = false;
  

  constructor(
    private experienciaService: ExperienciaService,
    private router : Router,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    })

  }

  eliminarExperiencia(id:string){

    this.confirmationService.confirm({
      message: '¿Seguro desea borrar esta experiencia laboral?',
      acceptLabel: "Si",
      accept: () => {
        this.experienciaService.eliminarExperiencia(id).subscribe(() => { 
          this.actualizarExperiencias.emit();
        }, error => console.log(error));  
        
      }
  });
  }

  modificarExperiencia(id:string){
    this.router.navigate([`/registrar-experiencia/${id}`])
  }

}

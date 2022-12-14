import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EducacionService } from '../../services/educacion.service';
import { LoginState } from '../login/state/login.state';
import { ConfirmationService } from 'primeng/api';

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
  @Output() actualizarEstudios = new EventEmitter();
  isAuthenticated : boolean;

  constructor(
    private educacionService:EducacionService,
    private router : Router,
    private confirmationService: ConfirmationService,

  ) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    })

  }

  eliminarEstudio(id:string){

    if(this.isAuthenticated){
 

      this.confirmationService.confirm({
        message: '¿Seguro desea borrar este estudio?',
        acceptLabel: "Si",
        accept: () => {
          this.educacionService.eliminarEstudio(id).subscribe(() => { 
            this.actualizarEstudios.emit();
          }, error => console.log(error));  
          
        }
    });
      
    }
      
  }

  modificarEstudio(id:string){
    this.router.navigate([`/registrar-educacion/${id}`])
  }
  
}

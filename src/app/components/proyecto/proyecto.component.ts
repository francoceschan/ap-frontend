import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { LoginState } from '../login/state/login.state';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Select(LoginState.getIsAuthenticated) isAuthenticated$ : Observable<boolean>;

  @Input() id:string;
  @Input() nombre:string;
  @Input() descripcion:string;
  @Input() link:string;

  @Output() actualizarProyectos = new EventEmitter();
  isAuthenticated : boolean;

  constructor(
    private proyectoService:ProyectoService,
    private router : Router,
    private confirmationService: ConfirmationService,

  ) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    })

  }

  eliminarProyecto(id:string){

    if(this.isAuthenticated){
 

      this.confirmationService.confirm({
        message: '¿Seguro desea borrar este proyecto?',
        acceptLabel: "Si",
        accept: () => {
          this.proyectoService.eliminarProyecto(id).subscribe(() => { 
            this.actualizarProyectos.emit();
          }, error => console.log(error));  
          
        }
    });
      
    }
      
  }

  modificarProyecto(id:string){
    this.router.navigate([`/registrar-proyecto/${id}`])
  }

  navigateWeb(){
    window.open(this.link,"_blank")
  }
}

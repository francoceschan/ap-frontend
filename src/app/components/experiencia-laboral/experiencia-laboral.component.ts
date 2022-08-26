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
  @Input() anioInicio:string;
  @Input() anioFin:string;
  isAuthenticated : boolean = false;

  constructor(
    private experienciaService: ExperienciaService,
    private router : Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    })
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

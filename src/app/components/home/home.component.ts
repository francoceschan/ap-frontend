import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../services/educacion.service';
import { Observable } from 'rxjs';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';
import { Select, Store } from '@ngxs/store';
import { Login, LoginState } from '../login/state/login.state';
import { AuthenticationService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Select(LoginState.getIsAuthenticated) isAuthenticated$ : Observable<boolean>;

  public estudios$ : Observable<Educacion[]> = this.educacionService.obtenerListaDeEstudios();
  public experiencias$ : Observable<Experiencia[]> =this.experienciaService.obtenerListaDeExperiencias();

  isAuthenticated : boolean;


  constructor(
    private educacionService:EducacionService,
    private experienciaService:ExperienciaService,
    private authService: AuthenticationService,
    private router: Router,
    private store: Store 
    
    ) {

    }

  ngOnInit(): void {
 
    this.store.dispatch(new Login(this.authService.isLoggedIn()));

    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    });

    this.estudios$.subscribe();

    this.experiencias$.subscribe();
  }

  registrarEducacion(){
    this.router.navigate(['registrar-educacion'])
  }
 
  registrarExperiencia(){
    this.router.navigate(['registrar-experiencia'])

  }


}

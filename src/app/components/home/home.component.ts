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
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/model/proyecto';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/model/persona';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Select(LoginState.getIsAuthenticated) isAuthenticated$ : Observable<boolean>;

  estudios$ : Observable<Educacion[]>;
  experiencias$ : Observable<Experiencia[]>;
  proyectos$: Observable<Proyecto[]>;
  persona$: Observable<Persona>;
  persona: Persona;
  estudios:Educacion[];
  experiencias:Experiencia[];
  proyectos:Proyecto[];
  isAuthenticated : boolean;


  constructor(
    private educacionService:EducacionService,
    private experienciaService:ExperienciaService,
    private proyectoService:ProyectoService,
    private personaService:PersonaService,
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

    this.estudios$ = this.educacionService.obtenerListaDeEstudios();
    this.estudios$.subscribe(estudios => this.estudios = estudios);

    this.experiencias$ = this.experienciaService.obtenerListaDeExperiencias();
    this.experiencias$.subscribe(experiencias => this.experiencias = experiencias);

    this.proyectos$ = this.proyectoService.obtenerListaDeProyectos();
    this.proyectos$.subscribe(proyectos => this.proyectos = proyectos);

    this.persona$ = this.personaService.obtenerPersona();
    this.persona$.subscribe(persona => {this.persona = persona});

    
  }

  registrarEducacion(){
    this.router.navigate(['registrar-educacion'])
  }
 
  registrarExperiencia(){
    this.router.navigate(['registrar-experiencia'])
  }

  registrarProyecto(){
    this.router.navigate(['registrar-proyecto'])
  }

  actualizarEstudios(){
    this.estudios$.subscribe(estudios => this.estudios = estudios);
  }

  actualizarExperiencias(){
    this.experiencias$.subscribe(experiencias => this.experiencias = experiencias);
  }

  actualizarProyectos(){
    this.experiencias$.subscribe(experiencias => this.experiencias = experiencias);
  }



}

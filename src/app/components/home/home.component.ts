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
  public estudios$ : Observable<Educacion[]>
  public experiencias$ : Observable<Experiencia[]>
 // estudios:Educacion[];
  //experiencias:Experiencia[];
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
    this.estudios$=this.educacionService.obtenerListaDeEstudios();
    this.experiencias$=this.experienciaService.obtenerListaDeExperiencias();
  
   // this.obtenerEstudios();
  //  this.obtenerExperiencias();
    //MUESTRA EL TOKEN
    //console.log(sessionStorage.getItem('token'));
    this.store.dispatch(new Login(this.authService.isLoggedIn()))
    this.isAuthenticated = this.store.selectSnapshot(LoginState.getIsAuthenticated)
    //this.estudios = this.store.selectSnapshot(EducacionState.getListaEducacion)

  }

  // obtenerEstudios(){
  //   // this.educacionService.obtenerListaDeEstudios().subscribe(data => {
  //   //   this.estudios=data;
  //   //  // console.log(data);
  //   // })    
  // }

  // obtenerExperiencias(){
  //   this.experienciaService.obtenerListaDeExperiencias().subscribe(data => {
  //     this.experiencias=data;
      
  //    // console.log(data);
  //   })   
  // }

  registrarEducacion(){
    this.router.navigate(['registrar-educacion'])
  }
 
  registrarExperiencia(){
    this.router.navigate(['registrar-experiencia'])

  }


}

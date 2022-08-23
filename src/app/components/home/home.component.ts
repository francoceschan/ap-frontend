import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../services/educacion.service';
import { AuthenticationService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estudios:Educacion[];
  experiencias:Experiencia[];
  isAuthenticated : boolean = false;
  // private subsAuth$: Subscription;

  constructor(
    private educacionService:EducacionService,
    private experienciaService:ExperienciaService,
    private router: Router,
    private authService: AuthenticationService,
    
    ) {
      
      // this.isAuthenticated = this.authService.isAuthenticated;

      // console.log(this.subsAuth$);

      // this.subsAuth$ = this.authService.isAuthenticated$.subscribe(
      //   (isAuth) => {
      //     this.isAuthenticated = isAuth;
      //     console.log("el nuevo:"+isAuth);
      //   });
    }

  ngOnInit(): void {
    this.obtenerEstudios();
    this.obtenerExperiencias();
    //MUESTRA EL TOKEN
    //console.log(sessionStorage.getItem('token'));
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  obtenerEstudios(){
    this.educacionService.obtenerListaDeEstudios().subscribe(data => {
      this.estudios=data;
     // console.log(data);
    })    
  }

  obtenerExperiencias(){
    this.experienciaService.obtenerListaDeExperiencias().subscribe(data => {
      this.experiencias=data;
     console.log(data);
    })   
  }

  registrarEducacion(){
    this.router.navigate(['registrar-educacion'])
  }


}

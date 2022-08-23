import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { EducacionService } from '../../services/educacion.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() id:string;
  @Input() institucion:string;
  @Input() titulo:string;
  @Input() anioInicio:string;
  @Input() anioFin:string;
  isAuthenticated : boolean = false;

  constructor(
    private educacionService:EducacionService,
    private router : Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  eliminarEstudio(id:string){
    this.educacionService.eliminarEstudio(id).subscribe(dato => {
      this.router.navigate(['/'])
    }, error => console.log(error));

  }

  modificarEstudio(id:string){
    this.router.navigate([`/registrar-educacion/${id}`])
  }

  
}

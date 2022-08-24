import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

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
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  eliminarExperiencia(id:string){
    this.experienciaService.eliminarExperiencia(id).subscribe(dato => {
      console.log(dato);
    }, error => console.log(error));

    this.router.navigate(['/'])
  }

  modificarExperiencia(id:string){
    this.router.navigate([`/registrar-experiencia/${id}`])
  }

}

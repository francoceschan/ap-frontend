import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EducacionService } from '../../services/educacion.service';
import { LoginState } from '../login/state/login.state';

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
  @Input() anioInicio:string;
  @Input() anioFin:string;
  isAuthenticated : boolean = false;

  constructor(
    private educacionService:EducacionService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    })
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

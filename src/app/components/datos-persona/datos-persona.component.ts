import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginState } from '../login/state/login.state';

@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css']
})
export class DatosPersonaComponent implements OnInit {

  @Select(LoginState.getIsAuthenticated) isAuthenticated$ : Observable<boolean>;
  
  @Input() nombre:string;
  @Input() titulo:string;
  isAuthenticated : boolean;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    })
  }

  modificarPersona(){
    this.router.navigate([`/modificar-persona`])
  }
}

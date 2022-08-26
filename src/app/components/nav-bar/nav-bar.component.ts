import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/auth.service';
import { LoginState } from '../login/state/login.state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Select(LoginState.getIsAuthenticated) isAuthenticated$ : Observable<boolean>;

  isAuthenticated : boolean;

  constructor( ) {}

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      this.isAuthenticated=isAuthenticatedState
    })

  }

}

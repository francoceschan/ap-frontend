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

  constructor(
    private authService:AuthenticationService,
    private store:Store
  ) {
    // this.isAuthenticated$ = this.store.select(state => state.Login.isAuthenticated);
    // console.log(this.isAuthenticated$)
   }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticatedState : boolean)=>{
      console.log(isAuthenticatedState)
    })
  //  this.isAuthenticated = this.authService.isLoggedIn();
  }

}

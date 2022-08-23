import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated : boolean = false;
  
  // private authSource = new Subject<boolean>();
  // isAuthenticated$ = this.authSource.asObservable();

  constructor() { 
    // if (sessionStorage.getItem('token') !== null){
    //   this.authSource.next(true);
    //   console.log("ejecuta true");
    // }else{
    //   this.authSource.next(false);
    //   console.log("ejecuta false");
    // }

  }



  isLoggedIn(){
    if (sessionStorage.getItem('token') !== null){
      return true;
    }

    return false;
  }
}

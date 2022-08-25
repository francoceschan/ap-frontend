import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Response } from 'src/app/model/response';
import { Subscription } from 'rxjs';
import { Store } from '@ngxs/store';
import { Login } from './state/login.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  subRef$: Subscription

  constructor(
    formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {
    this.formLogin = formBuilder.group({
      usuario: ['',Validators.required],
      contraseña: ['',Validators.required]
    })
   }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')!== null){
      sessionStorage.clear();
      this.router.navigate(['/home']);
    }
  }

  Login(){
    const usuarioLogin: Usuario = {
      usuario: this.formLogin.value.usuario,
      contraseña: this.formLogin.value.contraseña
      
    }
    
   this.subRef$ = this.http.post<any>('http://localhost:8080/api/auth/login',usuarioLogin, {observe:'response'})
    .subscribe(res => {
      console.log('token', res.body.token);
      sessionStorage.setItem('token',res.body.token);

      this.store.dispatch(new Login(true))
      
      this.router.navigate(['/home'])
    }, err => {console.log('Error en el login',err);})

  }

  ngOnDestroy(): void {
    if (this.subRef$){
      this.subRef$.unsubscribe();
    }
  }

}

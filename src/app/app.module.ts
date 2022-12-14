import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EducacionComponent } from './components/educacion/educacion.component';

import {ButtonModule} from 'primeng/button'
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule}  from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {AvatarModule} from 'primeng/avatar';
import {FileUploadModule} from 'primeng/fileupload';


import {HttpClientModule} from "@angular/common/http"
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { RegistrarEducacionComponent } from './components/registrar-modificar-educacion/registrar-modificar-educacion.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarModificarExperienciaComponent } from './components/registrar-modificar-experiencia/registrar-modificar-experiencia.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';

import { LoginState } from './components/login/state/login.state';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { RegistrarModificarProyectoComponent } from './components/registrar-modificar-proyecto/registrar-modificar-proyecto.component';
import { ModificarPersonaComponent } from './components/modificar-persona/modificar-persona.component';
import { DatosPersonaComponent } from './components/datos-persona/datos-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    RegistrarEducacionComponent,
    RegistrarModificarExperienciaComponent,
    ProyectoComponent,
    RegistrarModificarProyectoComponent,
    ModificarPersonaComponent,
    DatosPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    ConfirmDialogModule,
    FileUploadModule,
    AvatarModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsModule.forRoot([LoginState],
      { developmentMode: !environment.production }
    ),
 
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

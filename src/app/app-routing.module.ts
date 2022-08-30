import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModificarPersonaComponent } from './components/modificar-persona/modificar-persona.component';
import { RegistrarEducacionComponent } from './components/registrar-modificar-educacion/registrar-modificar-educacion.component';
import { RegistrarModificarExperienciaComponent } from './components/registrar-modificar-experiencia/registrar-modificar-experiencia.component';
import { RegistrarModificarProyectoComponent } from './components/registrar-modificar-proyecto/registrar-modificar-proyecto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registrar-educacion', component:RegistrarEducacionComponent},
  {path:'registrar-educacion/:id', component:RegistrarEducacionComponent},
  {path:'registrar-experiencia', component:RegistrarModificarExperienciaComponent},
  {path:'registrar-experiencia/:id', component:RegistrarModificarExperienciaComponent},
  {path:'registrar-proyecto', component:RegistrarModificarProyectoComponent},
  {path:'registrar-proyecto/:id', component:RegistrarModificarProyectoComponent},
  {path:'modificar-persona', component:ModificarPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

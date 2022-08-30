import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-modificar-persona',
  templateUrl: './modificar-persona.component.html',
  styleUrls: ['./modificar-persona.component.css']
})
export class ModificarPersonaComponent implements OnInit {

  persona : Persona;

  constructor(
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.personaService.obtenerPersona().subscribe(persona =>{
      this.persona = persona
    })
  }

  onSubmit(){

    this.personaService.modificarPersona("1", this.persona).subscribe(dato => {
      console.log(dato)
    }, error => console.log(error));

    this.router.navigate(['/'])
  }

  volver(){
    this.router.navigate(['/']);
  }

}

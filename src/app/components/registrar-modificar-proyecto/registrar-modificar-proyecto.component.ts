import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-registrar-modificar-proyecto',
  templateUrl: './registrar-modificar-proyecto.component.html',
  styleUrls: ['./registrar-modificar-proyecto.component.css']
})
export class RegistrarModificarProyectoComponent implements OnInit {

  id : string;
  proyecto : Proyecto = new Proyecto();

  constructor(
    private proyectoService: ProyectoService,
    private router :Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']){
      console.log(this.route.snapshot.params['id'])
      this.id = this.route.snapshot.params['id'];
      this.proyectoService.obtenerProyectoPorId(this.id).subscribe(data => {
        this.proyecto=data;
        
      })
    }

  }

  onSubmit(){
    if (this.route.snapshot.params['id']){

      this.proyectoService.modificarProyecto(this.id, this.proyecto).subscribe(dato => {
        console.log(dato)
      }, error => console.log(error));
    }
    else{
    this.proyectoService.registrarProyecto(this.proyecto).subscribe(dato => {
      console.log(dato)
    }, error => console.log(error));
    
  }
  this.router.navigate(['/'])
  }

  volver(){
    this.router.navigate(['/']);
  }

}

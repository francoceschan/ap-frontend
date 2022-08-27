import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../../model/experiencia';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-registrar-modificar-experiencia',
  templateUrl: './registrar-modificar-experiencia.component.html',
  styleUrls: ['./registrar-modificar-experiencia.component.css']
})
export class RegistrarModificarExperienciaComponent implements OnInit {

  id : string;
  experiencia : Experiencia = new Experiencia();

  constructor(
    private experienciaService: ExperienciaService,
    private router :Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']){
      console.log(this.route.snapshot.params['id'])
      this.id = this.route.snapshot.params['id'];
      this.experienciaService.obtenerExperienciaPorId(this.id).subscribe(data => {
        this.experiencia=data;
        this.experiencia.fechaInicio=new Date(this.experiencia.fechaInicio);
        this.experiencia.fechaFin=new Date(this.experiencia.fechaFin);
        
      })
    }

  }

  onSubmit(){
    if (this.route.snapshot.params['id']){

      this.experienciaService.modificarExperiencia(this.id, this.experiencia).subscribe(dato => {
        console.log(dato)
      }, error => console.log(error));
    }
    else{
    this.experienciaService.registrarExperiencia(this.experiencia).subscribe(dato => {
      console.log(dato)
    }, error => console.log(error));
    
  }
  this.router.navigate(['/'])
  }

  volver(){
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../services/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-educacion',
  templateUrl: './registrar-modificar-educacion.component.html',
  styleUrls: ['./registrar-modificar-educacion.component.css']
})
export class RegistrarEducacionComponent implements OnInit {

  id : string;
  educacion : Educacion = new Educacion();
  

  constructor(
    private educacionService: EducacionService,
    private router :Router,
    private route : ActivatedRoute,
 
   
    ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']){
      console.log(this.route.snapshot.params['id'])
      this.id = this.route.snapshot.params['id'];
      this.educacionService.obtenerEstudioPorId(this.id).subscribe(data => {
        this.educacion=data;
        this.educacion.fechaInicio=new Date(this.educacion.fechaInicio);
        this.educacion.fechaFin=new Date(this.educacion.fechaFin);
      })
    }

  }

  onSubmit(){
    if (this.route.snapshot.params['id']){

      this.educacionService.modificarEstudio(this.id, this.educacion).subscribe(dato => {
        console.log(dato)
      }, error => console.log(error));

    }
    else{

      this.educacionService.registrarEstudio(this.educacion).subscribe(dato => {
        console.log(dato)
        
      }, error => console.log(error));  

    }
   
  this.router.navigate(['/home'])
  }

  volver(){
    this.router.navigate(['/home']);
  }

}

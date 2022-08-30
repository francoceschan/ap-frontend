import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarModificarProyectoComponent } from './registrar-modificar-proyecto.component';

describe('RegistrarModificarProyectoComponent', () => {
  let component: RegistrarModificarProyectoComponent;
  let fixture: ComponentFixture<RegistrarModificarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarModificarProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarModificarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

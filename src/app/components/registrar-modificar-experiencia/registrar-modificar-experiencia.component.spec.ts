import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarModificarExperienciaComponent } from './registrar-modificar-experiencia.component';

describe('RegistrarModificarExperienciaComponent', () => {
  let component: RegistrarModificarExperienciaComponent;
  let fixture: ComponentFixture<RegistrarModificarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarModificarExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarModificarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicioLogeadoComponent } from './pagina-inicio-logeado.component';

describe('PaginaInicioLogeadoComponent', () => {
  let component: PaginaInicioLogeadoComponent;
  let fixture: ComponentFixture<PaginaInicioLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInicioLogeadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInicioLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContenidoLogeadoComponent } from './pagina-contenido-logeado.component';

describe('PaginaContenidoLogeadoComponent', () => {
  let component: PaginaContenidoLogeadoComponent;
  let fixture: ComponentFixture<PaginaContenidoLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaContenidoLogeadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaContenidoLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

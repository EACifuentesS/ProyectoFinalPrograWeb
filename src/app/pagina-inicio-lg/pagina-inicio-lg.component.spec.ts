import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicioLgComponent } from './pagina-inicio-lg.component';

describe('PaginaInicioLgComponent', () => {
  let component: PaginaInicioLgComponent;
  let fixture: ComponentFixture<PaginaInicioLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInicioLgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInicioLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

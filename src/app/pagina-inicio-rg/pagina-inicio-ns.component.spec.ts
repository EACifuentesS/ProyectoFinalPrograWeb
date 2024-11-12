import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicioNsComponent } from './pagina-inicio-ns.component';

describe('PaginaInicioNsComponent', () => {
  let component: PaginaInicioNsComponent;
  let fixture: ComponentFixture<PaginaInicioNsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInicioNsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInicioNsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

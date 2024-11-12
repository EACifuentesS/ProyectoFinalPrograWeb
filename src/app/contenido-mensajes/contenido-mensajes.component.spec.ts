import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoMensajesComponent } from './contenido-mensajes.component';

describe('ContenidoMensajesComponent', () => {
  let component: ContenidoMensajesComponent;
  let fixture: ComponentFixture<ContenidoMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoMensajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

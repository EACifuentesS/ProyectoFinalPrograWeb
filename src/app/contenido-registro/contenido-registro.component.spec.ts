import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoRegistroComponent } from './contenido-registro.component';

describe('ContenidoRegistroComponent', () => {
  let component: ContenidoRegistroComponent;
  let fixture: ComponentFixture<ContenidoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoLoginComponent } from './contenido-login.component';

describe('ContenidoLoginComponent', () => {
  let component: ContenidoLoginComponent;
  let fixture: ComponentFixture<ContenidoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoLogComponent } from './encabezado-log.component';

describe('EncabezadoLogComponent', () => {
  let component: EncabezadoLogComponent;
  let fixture: ComponentFixture<EncabezadoLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

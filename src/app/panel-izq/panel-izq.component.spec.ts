import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelIzqComponent } from './panel-izq.component';

describe('PanelIzqComponent', () => {
  let component: PanelIzqComponent;
  let fixture: ComponentFixture<PanelIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelIzqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDerechoLogComponent } from './panel-derecho-log.component';

describe('PanelDerechoLogComponent', () => {
  let component: PanelDerechoLogComponent;
  let fixture: ComponentFixture<PanelDerechoLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelDerechoLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDerechoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

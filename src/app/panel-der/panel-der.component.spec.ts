import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDerComponent } from './panel-der.component';

describe('PanelDerComponent', () => {
  let component: PanelDerComponent;
  let fixture: ComponentFixture<PanelDerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelDerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

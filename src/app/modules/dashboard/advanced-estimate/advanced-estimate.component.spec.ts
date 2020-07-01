import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedEstimateComponent } from './advanced-estimate.component';

describe('AdvancedEstimateComponent', () => {
  let component: AdvancedEstimateComponent;
  let fixture: ComponentFixture<AdvancedEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

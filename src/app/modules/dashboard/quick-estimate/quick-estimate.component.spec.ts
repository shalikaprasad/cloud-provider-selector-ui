import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEstimateComponent } from './quick-estimate.component';

describe('QuickEstimateComponent', () => {
  let component: QuickEstimateComponent;
  let fixture: ComponentFixture<QuickEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

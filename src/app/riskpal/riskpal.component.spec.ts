import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskpalComponent } from './riskpal.component';

describe('RiskpalComponent', () => {
  let component: RiskpalComponent;
  let fixture: ComponentFixture<RiskpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupCtoComponent } from './startup-cto.component';

describe('StartupCtoComponent', () => {
  let component: StartupCtoComponent;
  let fixture: ComponentFixture<StartupCtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupCtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupCtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewburyBritianComponent } from './newbury-britian.component';

describe('NewburyBritianComponent', () => {
  let component: NewburyBritianComponent;
  let fixture: ComponentFixture<NewburyBritianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewburyBritianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewburyBritianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

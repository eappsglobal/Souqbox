import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtsComponent } from './nts.component';

describe('NtsComponent', () => {
  let component: NtsComponent;
  let fixture: ComponentFixture<NtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

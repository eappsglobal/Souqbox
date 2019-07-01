import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2BRevolutionComponent } from './b2-b-revolution.component';

describe('B2BRevolutionComponent', () => {
  let component: B2BRevolutionComponent;
  let fixture: ComponentFixture<B2BRevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2BRevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2BRevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

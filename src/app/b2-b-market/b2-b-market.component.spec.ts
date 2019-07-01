import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2BMarketComponent } from './b2-b-market.component';

describe('B2BMarketComponent', () => {
  let component: B2BMarketComponent;
  let fixture: ComponentFixture<B2BMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2BMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2BMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

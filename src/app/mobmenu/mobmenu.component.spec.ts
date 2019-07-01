import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobmenuComponent } from './mobmenu.component';

describe('MobmenuComponent', () => {
  let component: MobmenuComponent;
  let fixture: ComponentFixture<MobmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLsitComponent } from './shopping-lsit.component';

describe('ShoppingLsitComponent', () => {
  let component: ShoppingLsitComponent;
  let fixture: ComponentFixture<ShoppingLsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingLsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

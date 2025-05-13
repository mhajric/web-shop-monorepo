import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCompactComponent } from './cart-compact.component';

describe('CartCompactComponent', () => {
  let component: CartCompactComponent;
  let fixture: ComponentFixture<CartCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCompactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

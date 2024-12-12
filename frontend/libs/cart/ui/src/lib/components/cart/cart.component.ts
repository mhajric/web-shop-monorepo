import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cart, CartService } from '@m-org/cart-domain';
import { Observable } from 'rxjs';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'm-org-cart',
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  get cart$(): Observable<Cart> {
    return this.cartService.cart$;
  }
}

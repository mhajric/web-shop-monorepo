import { Component, Input } from '@angular/core';
import { CartItem } from '@m-org/cart-domain';

@Component({
  selector: 'm-org-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
}

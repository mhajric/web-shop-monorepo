import { Component, Input } from '@angular/core';
import { CartItem } from '@m-org/cart-domain';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'm-org-cart-item',
  imports: [CommonModule, MatIcon, MatIconButton],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  removeItem() {
    throw new Error('Method not implemented.');
  }

  @Input() item?: CartItem;

  decreaseQuantity() {}

  increaseQuantity() {}
}

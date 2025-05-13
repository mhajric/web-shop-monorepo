import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Cart, CartService } from '@m-org/cart-domain';
import { CommonModule } from '@angular/common';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'm-org-cart-compact',
  imports: [
    CommonModule,
    MatButton,
    RouterLink,
    MatIcon,
    MatToolbar,
    MatIconButton,
    CartItemComponent,
    MatAnchor,
  ],
  templateUrl: './cart-compact.component.html',
  styleUrl: './cart-compact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCompactComponent implements OnInit {
  get cart$(): Observable<Cart> {
    return this.cartService.getCart();
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}

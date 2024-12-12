import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '@m-org/product-domain';
@Component({
  selector: 'm-org-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements AfterViewInit {
  @Input() product!: Product;
  @Output() addToCartEvent = new EventEmitter<any>();
  @Output() addToWishListEvent = new EventEmitter<any>();
  @Output() seePreviewEvent = new EventEmitter<any>();
  @Output() viewDetailsEvent = new EventEmitter<any>();
  @Output() shareEvent = new EventEmitter<any>();

  @Output() sizeChange = new EventEmitter<number>(); // Emit size change event

  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    if (this.el?.nativeElement) {
      const height = this.el.nativeElement.offsetHeight;
      this.sizeChange.emit(height);
    } else {
      console.warn('Card element not initialized!');
    }
  }
  // Flag to check if the product is on sale
  get isOnSale(): boolean {
    return (
      (this.product.discountedPrice &&
        this.product.discountedPrice < this.product.price) ||
      false
    );
  }

  // Flag to check if the product is available
  get isUnavailable(): boolean {
    return !this.product.isAvailable || false;
  }

  // Add to Cart handler
  addToCart(): void {
    this.addToCartEvent.emit(this.product);
  }

  // View Details handler
  viewDetails(): void {
    this.viewDetailsEvent.emit(this.product);
  }
}

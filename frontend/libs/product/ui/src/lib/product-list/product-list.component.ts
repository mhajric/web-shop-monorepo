import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Product } from '@m-org/product-domain';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'm-org-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ProductCardComponent,
    ScrollingModule,
    CdkVirtualScrollViewport,
  ],
})
export class ProductListComponent implements AfterViewInit {
  @Input() data!: Observable<Product[]>;
  @Output() loadMore = new EventEmitter<void>();

  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;
  @ViewChild('container') container!: ElementRef;

  @Input() products!: Product[];
  itemHeight = 360;
  itemsPerRow = 4;
  itemFlex = `1 0 calc(${100 / this.itemsPerRow}% - 10px)`; // 10px gap
  @Output()
  addToCartEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngAfterViewInit(): void {
    this.data.subscribe((products) => {
      const previousScrollOffset = this.viewport.measureScrollOffset();

      setTimeout(() => {
        // Recalculate the viewport size
        //this.viewport.checkViewportSize();
        // Restore the scroll offset
        this.viewport.scrollToOffset(previousScrollOffset);
      });
    });
    this.setItemsPerRow();
    this.calculateItemHeight();
  }

  setItemsPerRow(): void {
    const containerWidth = this.container.nativeElement.offsetWidth;
    const itemWidth = containerWidth / this.itemsPerRow;

    // Trigger virtual scroll recalculation
    this.viewport.checkViewportSize();
  }

  onSizeChange(size: number): void {
    // Keep track of the largest size to ensure uniform row height
    this.itemHeight = Math.max(this.itemHeight, size);
  }

  onScroll(rowIndex: number): void {
    const endRow = this.viewport.getRenderedRange().end;
    const totalRows = Math.floor(this.products.length / this.itemsPerRow);

    // Load more when reaching the end of visible items
    if (endRow + 1 >= totalRows) {
      this.loadMore.emit();
    }
  }

  calculateItemHeight(): void {
    // Optionally calculate or set a default height for items
    this.itemHeight = 360;
  }

  getRows(): Product[][] {
    const rows = [];
    for (let i = 0; i < this.products.length; i += this.itemsPerRow) {
      rows.push(this.products.slice(i, i + this.itemsPerRow));
    }
    return rows;
  }
}

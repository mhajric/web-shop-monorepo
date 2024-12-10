import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Product } from '@m-org/product-domain';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'm-org-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductCardComponent, ScrollingModule],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() reloadNeeded = new EventEmitter<void>();

  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  onScroll(event: any): void {
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`${end}, '>=', ${total}`);
    if (end === total - 1) {
      this.reloadNeeded.emit();
    }
  }
}

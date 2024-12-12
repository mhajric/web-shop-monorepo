import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Page, Product, ProductService } from '@m-org/product-domain';
import { ProductListComponent } from '@m-org/product-ui';
import { NavbarComponent } from '@m-org/shared-ui';
import { BehaviorSubject } from 'rxjs';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartComponent } from '@m-org/cart-ui';

@Component({
  selector: 'm-org-feature-search',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    NavbarComponent,
    MatSidenavModule,
    MatToolbarModule,
    CartComponent,
  ],
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSearchComponent {
  products: Product[] = [];
  productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();
  currentPage = 0;
  pageSize = 20; // Items per page
  loading = false;

  constructor(
    private productService: ProductService,
    private cd: ChangeDetectorRef,
  ) {}

  loadProducts(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;

    this.productService.getProducts(this.currentPage, this.pageSize).subscribe({
      next: (data: Page<Product>) => {
        //this.products = [...this.products, ...data.content];
        this.productsSubject.next([
          ...this.productsSubject.value,
          ...data.content,
        ]);
        this.currentPage++;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Page, Product, ProductService } from '@m-org/product-domain';
import { ProductListComponent } from '@m-org/product-ui';
import { BehaviorSubject } from 'rxjs';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SpinnerComponent } from '@m-org/shared-ui';

@Component({
  selector: 'm-org-feature-search',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    MatSidenavModule,
    MatToolbarModule,
    SpinnerComponent,
  ],
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSearchComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();
  currentPage = 0;
  pageSize = 20; // Items per page
  readonly loadingSubject = new BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(
    private productService: ProductService,
    private cd: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  loadProducts(): void {
    if (this.loadingSubject.value) {
      return;
    }
    this.loadingSubject.next(true);

    this.productService.getProducts(this.currentPage, this.pageSize).subscribe({
      next: (data: Page<Product>) => {
        //this.products = [...this.products, ...data.content];
        this.productsSubject.next([
          ...this.productsSubject.value,
          ...data.content,
        ]);
        this.currentPage++;
        this.loadingSubject.next(false);
      },
      error: () => {
        this.loadingSubject.next(true);
      },
    });
  }
}

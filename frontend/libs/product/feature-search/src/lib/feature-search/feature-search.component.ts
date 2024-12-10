import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '@m-org/product-domain';
import { ProductListComponent } from '@m-org/product-ui';
import { NavbarComponent } from '@m-org/shared-ui';

@Component({
  selector: 'm-org-feature-search',
  standalone: true,
  imports: [CommonModule, ProductListComponent, NavbarComponent],
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss'],
})
export class FeatureSearchComponent implements OnInit {
  products: Product[] = [];
  page = 0;
  size = 20;
  loading = false;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.loading) return;

    this.loading = true;
    this.productService.getProducts(this.page, this.size).subscribe({
      next: (response) => {
        this.products = [...this.products, ...response.content];
        this.page++;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}

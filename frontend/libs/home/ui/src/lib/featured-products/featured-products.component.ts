import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-featured-products',
  standalone: true,
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
})
export class FeaturedProductsComponent {
  @Input() data: any;
}

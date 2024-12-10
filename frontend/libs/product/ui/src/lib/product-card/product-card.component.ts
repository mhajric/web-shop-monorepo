import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
export class ProductCardComponent {

  @Input() product!: Product;

}

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Layout, LayoutService } from '@m-org/home-domain';
import {
  CategoriesComponent,
  DealsComponent,
  FeaturedProductsComponent,
} from '@m-org/home-ui';
import { NavbarComponent } from '@m-org/shared-ui';

@Component({
  selector: 'm-org-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  layout: Layout[] = [];

  readonly componentMap: { [key: string]: any } = {
    'featured-products': FeaturedProductsComponent,
    categories: CategoriesComponent,
    deals: DealsComponent,
  };

  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  dynamicComponent?: ViewContainerRef;

  constructor(private layoutService: LayoutService) {}
  ngAfterViewInit(): void {
    // Example: Sections received from the backend or configuration

    this.layoutService.getIndexLayout().subscribe((layout) => {
      this.layout = [...layout];
      this.renderSections();
    });
  }

  renderSections() {
    if (!this.dynamicComponent) return;
    this.dynamicComponent.clear();
    this.layout.forEach((l) => {
      const component = this.componentMap[l.name];
      if (component) {
        const componentRef = this.dynamicComponent?.createComponent(component);
        (
          componentRef?.instance as
            | FeaturedProductsComponent
            | CategoriesComponent
            | DealsComponent
        ).data = l.data; // Pass data to the component instance
      }
    });
  }
}

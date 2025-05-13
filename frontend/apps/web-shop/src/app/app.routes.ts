import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@m-org/product-feature-search').then(
        (m) => m.FeatureSearchComponent,
      ),
  },
];

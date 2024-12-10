import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@m-org/home-feature').then((m) => m.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@m-org/product-feature-search').then(
        (m) => m.FeatureSearchComponent,
      ),
  },
];

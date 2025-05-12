import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizzas',
    pathMatch: 'full'
  },
  {
    path: 'pizzas',
    loadComponent: () => import('./pizzas/pizza-container/pizza-container.component').then(m => m.PizzaContainerComponent)
  },
  {
    path: 'stores',
    loadChildren: () => import('./stores/stores.routes').then(m => m.storesRoutes)
  }
];

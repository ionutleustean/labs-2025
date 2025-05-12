import {Routes} from '@angular/router';
import {PizzaContainerComponent} from './pizzas/pizza-container/pizza-container.component';
import {FeatureStoreListComponent} from './stores/feature-store-list/feature-store-list.component';
import {FeatureStoreDetailsComponent} from './stores/feature-store-details/feature-store-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizzas',
    pathMatch: 'full'
  },
  {
    path: 'pizzas',
    component: PizzaContainerComponent
  },
  {
    path: 'stores',
    children: [
      {
        path: '',
        component: FeatureStoreListComponent
      },
      {
        path: ':id',
        component: FeatureStoreDetailsComponent
      }
    ]
  }
];

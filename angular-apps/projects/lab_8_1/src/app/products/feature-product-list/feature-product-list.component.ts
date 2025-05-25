import {Component, signal} from '@angular/core';
import {SortComponent, SortConfig} from './sort/sort.component';
import {FiltersComponent} from './filters/filters.component';
import {ProductFilter} from '../domain/product-filters.model';
import {SortOption} from '../domain/product-sort.model';
import {ProductModel} from '../domain/product.model';
import {ProductCardComponent} from './product-card/product-card.component';

@Component({
  selector: 'app-feature-product-list',
  imports: [
    SortComponent,
    FiltersComponent,
    ProductCardComponent
  ],
  templateUrl: './feature-product-list.component.html',
  styleUrl: './feature-product-list.component.scss'
})
export class FeatureProductListComponent {
  sortFields = signal<SortOption[]>([
    {
      value: 'name',
      label: 'Name'
    },
    {
      value: 'price',
      label: 'Price'
    },
    {
      value: 'rating',
      label: 'Rating'
    }
  ]);

  products = signal<ProductModel[]>([
    {
      id: 'burger_2_1',
      imageUrl: '/burgers/burger_2_1.png',
      title: 'Four Cheese Burger',
      description: 'Blend of mozzarella, parmesan, gorgonzola & ricotta on a beef patty.',
      price: 11.99,
      rating: 2,
      type: 'burger'
    }
  ])


  onSortChange(sortConfig: SortConfig) {
    console.log(sortConfig)
  }

  onFilterChanged(event: ProductFilter) {
    console.log(event)
  }
}

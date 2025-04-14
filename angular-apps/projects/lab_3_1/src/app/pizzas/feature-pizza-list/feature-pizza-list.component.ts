import {Component, signal} from '@angular/core';
import {pizzaData} from '../data/pizza.data';

@Component({
  selector: 'app-feature-pizza-list',
  imports: [
  ],
  templateUrl: './feature-pizza-list.component.html',
  styleUrl: './feature-pizza-list.component.scss'
})
export class FeaturePizzaListComponent {
    pizzas = signal(pizzaData);
}

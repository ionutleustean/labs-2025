import {Component, input, output, signal} from '@angular/core';
import {PizzaModel} from '../domain/pizza.model';

@Component({
  selector: 'app-feature-pizza-list',
  imports: [
  ],
  templateUrl: './feature-pizza-list.component.html',
  styleUrl: './feature-pizza-list.component.scss'
})
export class FeaturePizzaListComponent {
  pizzas = input<PizzaModel[]>([]);

  pizzaClicked = output<PizzaModel>()

  onEditClicked(pizza: PizzaModel) {
    this.pizzaClicked.emit(pizza);
  }
}

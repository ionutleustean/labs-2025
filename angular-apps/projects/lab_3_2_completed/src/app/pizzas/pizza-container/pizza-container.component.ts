import {Component, signal} from '@angular/core';
import {FeaturePizzaListComponent} from '../feature-pizza-list/feature-pizza-list.component';
import {PizzaFormComponent} from '../pizza-form/pizza-form.component';
import {pizzaData} from '../data/pizza.data';
import {PizzaModel} from '../domain/pizza.model';

@Component({
  selector: 'app-pizza-container',
  imports: [
    FeaturePizzaListComponent,
    PizzaFormComponent
  ],
  templateUrl: './pizza-container.component.html',
  styleUrl: './pizza-container.component.scss'
})
export class PizzaContainerComponent {
  pizzas = signal(pizzaData);

  onPizzaChanged($event: PizzaModel) {
    this.pizzas.update(pizzas => {
      return [...pizzas, $event]
    })
  }
}

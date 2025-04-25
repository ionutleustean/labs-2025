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
  pizza = signal<PizzaModel | null >(null);

  onPizzaChanged($event: PizzaModel) {

    const pizzas = [...this.pizzas()];

    const index = pizzas.findIndex(p => p.id === $event.id);

    if(index !== -1) {
      pizzas[index] = $event;
      this.pizzas.set(pizzas)
    }
    else {
      this.pizzas.update(pizzas => {
        return [...pizzas, $event]
      })
    }

    this.pizza.set(null);

  }

  addNewPizza() {
    this.pizza.set({
      id: Math.random().toString(),
      imageUrl: '',
      name: '',
      description: '',
      price: 0,
      ingredients: []
    })
  }

  onPizzaSelected($event: PizzaModel) {
    this.pizza.set($event)
  }
}

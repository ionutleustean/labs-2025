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

    const index = this.pizzas().findIndex((p) => p.id === $event.id)

    if(index === -1) {
      this.pizzas.update(pizzas => {
        return [...pizzas, $event]
      })
    }
    else {
      const pizzas = [...this.pizzas()];
      pizzas[index] = $event
      this.pizzas.set(pizzas);
    }


    this.pizza.set(null);
  }

  addEmptyPizza() {
    this.pizza.set({
      id: Math.random().toString(),
      imageUrl: '',
      name: '',
      description: '',
      price: 0,
      ingredients: []
    })
  }

  onEdit($event: PizzaModel) {
    this.pizza.set($event);
  }
}

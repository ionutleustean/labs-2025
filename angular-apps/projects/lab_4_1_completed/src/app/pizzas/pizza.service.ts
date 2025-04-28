import {Injectable, signal} from '@angular/core';
import {pizzaData} from './data/pizza.data';
import {PizzaModel} from './domain/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzas = signal(pizzaData);

  constructor() {
  }

  getPizzas() {
    return this.pizzas
  }

  saveOrUpdatePizza(pizza: PizzaModel) {
    const pizzas = [...this.pizzas()];

    const index = pizzas.findIndex(p => p.id === pizza.id);

    if (index !== -1) {
      pizzas[index] = pizza;
      this.pizzas.set(pizzas)
    } else {
      this.pizzas.update(pizzas => {
        return [...pizzas, pizza]
      })
    }
  }
}

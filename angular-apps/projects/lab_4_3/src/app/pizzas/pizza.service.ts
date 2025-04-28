import {Injectable, signal} from '@angular/core';
import {PizzaModel} from './domain/pizza.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzas = signal<PizzaModel[]>([])

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<PizzaModel[]>('http://localhost:3000/api/pizzas').subscribe(pizzas => this.pizzas.set(pizzas))
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

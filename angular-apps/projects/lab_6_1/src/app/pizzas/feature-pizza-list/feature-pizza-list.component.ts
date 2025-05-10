import {Component, input, output} from '@angular/core';
import {PizzaModel} from '../domain/pizza.model';
import {PizzaCardComponent} from '../pizza-card/pizza-card.component';

@Component({
  selector: 'app-feature-pizza-list',
  imports: [
    PizzaCardComponent
  ],
  templateUrl: './feature-pizza-list.component.html',
  styleUrl: './feature-pizza-list.component.scss'
})
export class FeaturePizzaListComponent {
  pizzas = input<PizzaModel[]>([]);
  pizzaSelected = output<PizzaModel>();
  pizzaDeleted = output<PizzaModel>();
  protected readonly onclick = onclick;

  editClicked(pizza: PizzaModel) {
    this.pizzaSelected.emit(pizza);
  }

  deleteClicked(pizza: PizzaModel) {
    this.pizzaDeleted.emit(pizza);
  }
}

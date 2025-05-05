import {Component, input} from '@angular/core';
import {PizzaModel} from '../domain/pizza.model';

@Component({
  selector: 'app-pizza-card',
  imports: [],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.scss'
})
export class PizzaCardComponent {
  pizza = input.required<PizzaModel>();
}

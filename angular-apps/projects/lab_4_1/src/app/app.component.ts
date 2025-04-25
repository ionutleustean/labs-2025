import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {PizzaContainerComponent} from './pizzas/pizza-container/pizza-container.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MenuComponent, PizzaContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ex_2_1';
}

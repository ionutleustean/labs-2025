import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FeaturePizzaListComponent} from './pizzas/feature-pizza-list/feature-pizza-list.component';
import {MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, FeaturePizzaListComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ex_2_1';
}

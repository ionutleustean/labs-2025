import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {

}

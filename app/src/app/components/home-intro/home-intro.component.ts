import { Component } from '@angular/core';
import { routes } from 'src/app/routes';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss']
})
export class HomeIntroComponent {
  routes = routes;
  animations = animations;
}

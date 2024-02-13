import { Component } from '@angular/core';
import { routes } from 'src/app/routes';
import { contacts } from 'src/app/contacts';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  routes = routes;
  contacts = contacts;
  animations = animations;
}

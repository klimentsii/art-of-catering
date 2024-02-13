import { Component } from '@angular/core';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  deafaultPath: string = '/assets/images/clients/';

  animations = animations;

  images: Array<string> = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
  ]
}

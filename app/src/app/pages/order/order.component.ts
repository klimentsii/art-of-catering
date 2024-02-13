import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { listItem } from 'src/app/components/carousel/carousel.component';
import { leftBuffetsList } from 'src/app/list';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  state: listItem;

  constructor(public router: Router){
    this.state = (this.router.getCurrentNavigation()?.extras.state as listItem) || leftBuffetsList[0];
  }
}

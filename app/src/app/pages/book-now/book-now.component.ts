import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { listItem } from 'src/app/components/carousel/carousel.component';
import { serviceList } from 'src/app/list';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent {
  state: listItem;

  constructor(public router: Router){
    this.state = (this.router.getCurrentNavigation()?.extras.state as listItem) || serviceList[0];
  }
}

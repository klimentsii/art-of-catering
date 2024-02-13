import { Component, Input } from '@angular/core';
import { animations } from 'src/app/animations';

export interface listItem {
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() items: Array<listItem>;
  @Input() isRight: boolean = true;

  animations = animations;
  currentItemIndex = 0;

  constructor() { }

  changeItem(index: number) {
    this.currentItemIndex = index;
  }
}

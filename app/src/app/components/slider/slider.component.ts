import { Component, Input } from '@angular/core';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() slides: Array<string>;

  animations = animations;
  currentItemIndex = 0;

  constructor() { }

  changeItem(index: number) {
    this.currentItemIndex = index;
  }
}

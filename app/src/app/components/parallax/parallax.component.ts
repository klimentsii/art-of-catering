import { Component, Input } from '@angular/core';
import { animations } from 'src/app/animations';

export interface ParallaxModel {
  bgColor: string;
  color: string;
  height: string;
  bgImage: string;
}

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent {
  @Input() details!: ParallaxModel;
  @Input() contentExist: boolean = true;

  animations = animations;
}

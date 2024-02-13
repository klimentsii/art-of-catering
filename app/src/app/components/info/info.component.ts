import { Component, Input } from '@angular/core';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() height!: string;
  @Input() title!: string;
  @Input() description!: string;

  animations = animations;
}

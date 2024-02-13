import { Component } from '@angular/core';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-philosophy-intro',
  templateUrl: './philosophy-intro.component.html',
  styleUrls: ['./philosophy-intro.component.scss']
})
export class PhilosophyIntroComponent {
  animations = animations;
}

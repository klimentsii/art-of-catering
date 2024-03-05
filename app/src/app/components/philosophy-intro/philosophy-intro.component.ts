import { Component } from '@angular/core';
import { animations } from 'src/app/animations';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-philosophy-intro',
  templateUrl: './philosophy-intro.component.html',
  styleUrls: ['./philosophy-intro.component.scss']
})
export class PhilosophyIntroComponent {
  animations = animations;
  bgImage: string;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getPhilosophyData().subscribe(data => { this.bgImage = data['intro-image'] });
  }
}

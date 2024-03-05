import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss']
})
export class PhilosophyComponent {
  parallaxImage: string;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getPhilosophyData().subscribe(data => { this.parallaxImage = data['parallax-image'] });
  }
}

import { Component } from '@angular/core';
import { routes } from 'src/app/routes';
import { animations } from 'src/app/animations';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss']
})
export class HomeIntroComponent {
  routes = routes;
  animations = animations;

  bgImage: string;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getHomeData().subscribe(data => { this.bgImage = data['intro-image'] });
  }
}

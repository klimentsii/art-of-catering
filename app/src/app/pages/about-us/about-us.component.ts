import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  bgImage: string;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getAboutUsData().subscribe(data => { this.bgImage = data['parallax-image'] });
  }
}

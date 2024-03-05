import { Component } from '@angular/core';
import { animations } from 'src/app/animations';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  images: string[];

  animations = animations;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getHomeData().subscribe(data => { this.images = data['client-logos'] });
  }
}

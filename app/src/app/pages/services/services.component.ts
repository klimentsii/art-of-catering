import { Component } from '@angular/core';
import { animations } from 'src/app/animations';
import { ContentService, Service } from 'src/app/services/content.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  animations = animations;
  service1: Array<Service>;
  service2: Array<Service>

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getService1Data().subscribe(data => { this.service1 = data });
    this.contentService.getService2Data().subscribe(data => { this.service2 = data });
  }
}

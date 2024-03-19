import { Component } from '@angular/core';
import { ContentService, GalleryItem } from 'src/app/services/content.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  deafaultPath: string = '/assets/images/gallery/';
  sections: Array<string>;
  gallery: Array<GalleryItem>;
  selectedSection: string;
  search: string;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getGalleryData().subscribe(data => {
      this.sections = data.sections;
      this.gallery = data.items;
    });
  }
}

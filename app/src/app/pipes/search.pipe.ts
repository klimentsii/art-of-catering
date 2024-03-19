import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItem } from '../services/content.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(gallery: Array<GalleryItem>, search: string): Array<GalleryItem> {
    if (!search) {
      return gallery;
    } else {
      return gallery.filter(image => image.keywords.includes(search));
    }
  }
}

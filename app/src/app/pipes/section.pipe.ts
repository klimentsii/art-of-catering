import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItem } from '../services/content.service';

@Pipe({
  name: 'section'
})
export class SectionPipe implements PipeTransform {
  transform(gallery: Array<GalleryItem>, section: string): Array<GalleryItem> {
    if (!section) {
      return gallery;
    } else {
      return gallery.filter(image => image.section === section);
    }
  }
}

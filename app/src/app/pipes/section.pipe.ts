import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItemModel } from '../gallery';

@Pipe({
  name: 'section'
})
export class SectionPipe implements PipeTransform {
  transform(gallery: Array<GalleryItemModel>, section: string): Array<GalleryItemModel> {
    if (!section) {
      return gallery;
    } else {
      return gallery.filter(image => image.section === section);
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItemModel } from '../gallery';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(gallery: Array<GalleryItemModel>, search: string): Array<GalleryItemModel> {
    if (!search) {
      return gallery;
    } else {
      return gallery.filter(image => image.searchRow.includes(search));
    }
  }
}

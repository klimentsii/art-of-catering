import { Pipe, PipeTransform } from '@angular/core';
import { SearchSectionsModel } from '../gallery';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(value: SearchSectionsModel): Array<string> {
    let keys: Array<string> = [];
    Object.values(value).map(value => keys.push(value));
    return keys;
  }
}

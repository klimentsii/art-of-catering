import { Component } from '@angular/core';
import { SearchSections } from 'src/app/gallery';
import { gallery } from 'src/app/gallery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  deafaultPath: string = '/assets/images/gallery/';
  SearchSections = SearchSections;
  gallery = gallery;
  selectedSection: string;
  search: string;
}

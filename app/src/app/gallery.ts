export interface GalleryItemModel {
  img: string;
  section: string;
  searchRow: string;
}

export interface SearchSectionsModel {
  buffets: string;
  flower: string;
}

export const SearchSections: SearchSectionsModel = {
  buffets: 'Buffets',
  flower: 'Flower',
}

export const gallery: Array<GalleryItemModel> = [
  {
    img: 'gallery_1.jpg',
    section: SearchSections.buffets,
    searchRow: 'description',
  },
  {
    img: '4.jpg',
    section: SearchSections.buffets,
    searchRow: 'description',
  },
  {
    img: '5.jpg',
    section: SearchSections.buffets,
    searchRow: 'description',
  },
  {
    img: '6.png',
    section: SearchSections.buffets,
    searchRow: 'description',
  },
  {
    img: 'gallery_2.jpg',
    section: SearchSections.flower,
    searchRow: 'description',
  },
  {
    img: '7.jpg',
    section: SearchSections.flower,
    searchRow: 'description',
  },
  {
    img: '8.jpg',
    section: SearchSections.flower,
    searchRow: 'description',
  },
];

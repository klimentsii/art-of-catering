import { Route, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PhilosophyComponent } from "./pages/philosophy/philosophy.component";
import { ServicesComponent } from "./pages/services/services.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { BuffetsComponent } from "./pages/buffets/buffets.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";

import { leftBuffetsList, serviceList } from "./list";
import { BookNowComponent } from "./pages/book-now/book-now.component";
import { OrderComponent } from "./pages/order/order.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'philosophy',
    component: PhilosophyComponent,
    title: 'philosophy',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'services',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'gallery',
  },
  {
    path: 'buffets',
    component: BuffetsComponent,
    title: 'buffets',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'about us',
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    title: 'contact us',
  },
];

export const hidedRoutes: Routes = [
  {
    path: 'book-now',
    component: BookNowComponent,
    title: 'book now',
    data: serviceList[0],
  },
  {
    path: 'order',
    component: OrderComponent,
    title: 'order',
    data: leftBuffetsList[0],
  },
]

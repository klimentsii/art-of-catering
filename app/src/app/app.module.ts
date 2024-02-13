import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeIntroComponent } from './components/home-intro/home-intro.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BuffetsComponent } from './pages/buffets/buffets.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import { PhilosophyIntroComponent } from './components/philosophy-intro/philosophy-intro.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { InfoComponent } from './components/info/info.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { FormComponent } from './components/form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
import { OrderComponent } from './pages/order/order.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ClientsComponent } from './components/clients/clients.component';
import { VideoDialogComponent } from './components/video-dialog/video-dialog.component';
import { SearchComponent } from './components/search/search.component';
import { KeysPipe } from './pipes/keys.pipe';
import { SectionPipe } from './pipes/section.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PhilosophyComponent,
    HomeComponent,
    HomeIntroComponent,
    ServicesComponent,
    GalleryComponent,
    BuffetsComponent,
    AboutUsComponent,
    ContactUsComponent,
    PhilosophyIntroComponent,
    ParallaxComponent,
    InfoComponent,
    RewardsComponent,
    FormComponent,
    BookNowComponent,
    MenuDialogComponent,
    OrderComponent,
    ScrollAnimationDirective,
    CarouselComponent,
    ClientsComponent,
    VideoDialogComponent,
    SearchComponent,
    KeysPipe,
    SectionPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

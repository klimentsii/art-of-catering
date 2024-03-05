import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface HomeData {
  "video-link": string;
  "intro-image": string;
  "parallax-image": string;
  "client-logos": string[];
}

export interface PhilosophyData {
  "intro-image": string;
  "parallax-image": string;
}

export interface Service {
  title: string;
  description: string;
  images: string[];
}

export interface GalleryData {
  sections: string[];
  items: GalleryItem[];
}

export interface GalleryItem {
  image: string;
  section: string;
  keywords: string;
}

export interface BuffetData {
  title: string;
  description: string;
  "background-image": string;
  "slider-images": string[];
}

export interface AboutUsData {
  "parallax-image": string;
}

export interface JsonData {
  home: HomeData;
  philosophy: PhilosophyData;
  service1: Service[];
  service2: Service[];
  gallery: GalleryData;
  buffets: BuffetData[];
  "about-us": AboutUsData;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  url: string = '/assets/contentController.json';

  constructor(private http: HttpClient){}

  getHomeData(): Observable<HomeData> {
    return this.http.get<JsonData>(this.url).pipe(
      map((data: JsonData) => data.home)
    );
  }

  getPhilosophyData(): Observable<PhilosophyData> {
    return this.http.get<JsonData>(this.url).pipe(
      map((data: JsonData) => data.philosophy)
    );
  }

  getService1Data(): Observable<Service[]> {
    return this.http.get<JsonData>(this.url).pipe(
      map((data: JsonData) => data.service1)
    );
  }

  getService2Data(): Observable<Service[]> {
    return this.http.get<JsonData>(this.url).pipe(
      map((data: JsonData) => data.service2)
    );
  }

  getBuffetsData(): Observable<BuffetData[]> {
    return this.http.get<JsonData>(this.url).pipe(
      map((data: JsonData) => data.buffets)
    );
  }

  getBAboutUsData(): Observable<AboutUsData> {
    return this.http.get<JsonData>(this.url).pipe(
      map((data: JsonData) => data['about-us'])
    );
  }
}


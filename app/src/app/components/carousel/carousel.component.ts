import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService, Service } from 'src/app/services/content.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() sections: Service[] = [];
  @Input() isRight: boolean = true;

  currentSectionIndex = 0;
  currentSlideIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      if (this.currentSlideIndex === this.sections[this.currentSectionIndex].images.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    }, 5000)
  }

  goToSection(index: number) {
    this.currentSectionIndex = index;
    this.currentSlideIndex = 0;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  get currentSection(): Service {
    return this.sections[this.currentSectionIndex];
  }
}


import { Directive, ElementRef, Renderer2, Input, HostListener, OnInit } from '@angular/core';
import { AnimationModel } from '../animations';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements OnInit {
  elementPosition: number = 0;
  scrollHeight: number = 0;
  distance: number = 0;

  @Input() animation: AnimationModel;

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {

    this.renderer.setStyle(
      this.element.nativeElement, this.animation.property, this.animation.startValue
    )
    this.renderer.setStyle(
      this.element.nativeElement, 'transition', 'all 0.5s'
    )

    setTimeout(() => { this.checkDistance(this.element) }, 0);
  }

  @HostListener('window:scroll') onScroll() {
    this.checkDistance(this.element);
  }

  checkDistance(element: ElementRef) {
    this.scrollHeight = window.innerHeight;
    this.elementPosition = element.nativeElement.getBoundingClientRect().top;
    this.distance = this.elementPosition - this.scrollHeight;

    if (this.distance < -100) {
      this.renderer.setStyle(
        element.nativeElement, this.animation.property, this.animation.endValue
      );
    }
  }
}

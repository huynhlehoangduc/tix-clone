import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input() destination: string;
  scrolled = false;

  constructor(private el: ElementRef, private route: Router) {
    this.route.events.subscribe((val) => {
        const element = document.querySelector(this.destination);
        if (!element) {
          return;
        }
        if (val instanceof NavigationEnd) {
          if (!this.scrolled) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            this.scrolled = true;
          }
        }
      }
    );
  }

  @HostListener('click') click(): void {
    const element = document.querySelector(this.destination);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}

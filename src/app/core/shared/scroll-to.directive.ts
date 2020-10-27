import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input() destination: string;

  constructor() {
  }

  @HostListener('click') click(): void {debugger;
    const element = document.querySelector(this.destination);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}

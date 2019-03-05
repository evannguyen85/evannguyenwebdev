import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNavigation]'
})
export class NavigationDirective {

  constructor(public el: ElementRef) { }

  navigateToSection(e) {
    const elem = this.el;
    let navHeight = 0;
    if (e.target !== undefined) {
      navHeight = 0; // e.target.offsetHeight; // to think about this one carefully
      window.scrollTo({
        top: elem.nativeElement.offsetTop - navHeight,
        left: 0,
        behavior: 'smooth'
      });
      // e: $event of ul
      const li = e.srcElement.parentElement;
      const nav = li.offsetParent;
      li.className = 'active';
      if (nav.scrollTop === 0 && nav.scrollLeft === 0) {
        if (!nav.className.includes('sticky')) {
          nav.className += ' sticky';
        }
      }
    } else {
      navHeight = e;
      window.scrollTo({
        top: elem.nativeElement.offsetTop - navHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
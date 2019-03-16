import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNavigation]'
})
export class NavigationDirective {

  constructor(public el: ElementRef) { }

  navigateToSection(e) {
    const elem = this.el;
    if (e.target !== undefined) {
      // navHeight = e.target.offsetHeight; // to think about this one carefully
      // console.log(navHeight);
      window.scrollTo({
        top: elem.nativeElement.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
      // e: $event of ul
      const li = e.srcElement.parentElement;
      li.classList.add('active');
      const nav = li.offsetParent;
      // console.log(nav);
      if (nav.scrollTop === 0 && nav.scrollLeft === 0) {
        if (!nav.className.includes('sticky')) {
          nav.className += ' sticky';
        }
      }
    } else {
      const navHeight = e;
      window.scrollTo({
        top: elem.nativeElement.offsetTop - navHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

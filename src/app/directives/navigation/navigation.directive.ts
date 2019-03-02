import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNavigation]'
})
export class NavigationDirective {

  constructor(private el: ElementRef) { }

  navigateToSection() {
    console.log(this);
    const elem = this.el;
    window.scrollTo({
      top: elem.nativeElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
    // console.log(elem.nativeElement.offsetTop);
  }
}

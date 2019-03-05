import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appViewWork]'
})
export class ViewWorkDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event']) onMouseEnter() {
    const elem = this.el.nativeElement.innerHTML;
  }

}

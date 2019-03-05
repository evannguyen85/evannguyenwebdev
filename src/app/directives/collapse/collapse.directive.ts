import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {

  constructor(private el: ElementRef) {}

   @HostListener('click', ['$event'])
   onButtonClick(e) {
    const button = this.el.nativeElement;
    if (button.innerHTML === 'Expand Gallery') {
      button.innerHTML = 'Collapse Gallery';
      button.classList.remove('btn-success');
      button.classList.add('btn-danger');
    } else {
      button.innerHTML = 'Expand Gallery';
      button.classList.remove('btn-danger');
      button.classList.add('btn-success');
    }
   }

}

import { Directive, Input, ElementRef, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[appResponsiveImage]'
})
export class ResposiveImageDirective implements OnInit, AfterViewInit, AfterContentChecked {

  constructor(private el: ElementRef) { }

  @Input('appResponsiveImage') src: string;

  ngOnInit() {}

  ngAfterViewInit() {
    // console.log(this.src);
    if (this.src) {
      const elem = this.el.nativeElement;
      elem.style['background'] = 'url("' + this.src + '")';
      this.setStyle();
    }
  }

  ngAfterContentChecked() {
    if (this.src) {
      const elem = this.el.nativeElement;
      elem.style['background'] = 'url("' + this.src + '")';
      this.setStyle();
    }
  }

  setStyle() {
    const elem = this.el.nativeElement;
    elem.style['background-repeat'] = 'no-repeat';
    elem.style['background-position'] = 'center';
    elem.style['background-size'] = 'cover';
    elem.style['height'] = '101vh';
    elem.style['display'] = 'block';
    elem.style['minHeigh'] = '100%';
    elem.style['minWidth'] = '100%';
    elem.style['maxHeigh'] = '100%';
    elem.style['maxWidth'] = '100%';
    // elem.style['margin-left'] = '-5px';
    // elem.style['margin-bottom'] = '-5px';
    // elem.style['filter'] = 'blur(1px)';
    // elem.style['-webkit-filter'] = 'blur(1px)';
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  @Input('appResaltar')
  color = 'yellow';

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter', ['$event'])
  onMouseenter(eventInfo) {
    this.resaltar(this.color);
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.resaltar('');
  }

  resaltar(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective implements OnInit {

  @Input()
  step = 10;

  @Input('appRotate')
  initRotation = 0;

  currentRotation = this.initRotation;

  constructor(private el: ElementRef ) {

  }

  ngOnInit() {
    this.rotate(this.initRotation);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.shiftKey) {
      this.currentRotation -= this.step;
    } else {
      this.currentRotation += +this.step;
    }
    this.rotate(this.currentRotation);
  }

  rotate(rotation: number) {
    this.el.nativeElement.style.transform = 'rotate(' + rotation + 'deg)';
  }

}

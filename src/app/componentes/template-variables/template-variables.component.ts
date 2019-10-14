import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {

  @ViewChild('caja', {static: false})
  caja: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('Valor de la caja: ', this.caja.nativeElement.value);
  }

}

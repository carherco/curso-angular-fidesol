import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit {

  nombre: string;
  constructor() {
    this.nombre = 'Carlos';
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  nombre: string;
  numero: number;
  numero2: number;
  resultado: number;
  usuarios = [
    { nombre: 'Carlos', edad: 17 },
    { nombre: 'Pedro', edad: 18 },
    { nombre: 'María', edad: 19 },
    { nombre: 'Raquel', edad: 39 }
  ];

  constructor() {
    this.nombre = 'Carlos';
    this.numero = 18;
    this.numero2 = 2;

    setTimeout( () => {
      this.nombre = 'Pedro';
    } , 3000);
  }

  ngOnInit() {
  }

  suma(varA, varB) {
    return varA + varB;
  }

  cambiarNombre(eventInfo) {
    console.log(eventInfo);
    this.nombre = eventInfo.target.value;
  }

}

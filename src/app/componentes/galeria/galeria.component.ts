import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagenes = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];
  imagenSeleccionada: string;
  indice: number;
  ancho: number;

  playing: boolean;

  private intervalId;

  constructor() {
    this.indice = 0;
    this.ancho = 300;
    this.playing = false;
    this.imagenSeleccionada = this.imagenes[this.indice];
  }

  ngOnInit() {
  }

  anterior() {
    this.indice -= 1;
    this.imagenSeleccionada = this.imagenes[this.indice];
  }

  siguiente() {
    this.indice += 1;
    if (this.indice >= this.imagenes.length) {
      this.indice = 0;
    }
    this.imagenSeleccionada = this.imagenes[this.indice];
  }

  seleccionarImagen(indice: number) {
    this.indice = indice;
    this.imagenSeleccionada = this.imagenes[this.indice];
  }

  aumentar() {
    this.ancho += 50;
  }

  disminuir() {
    this.ancho -= 50;
  }

  play() {
    this.intervalId = setInterval( () => this.siguiente() , 1000);
    this.playing = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.playing = false;
  }

}

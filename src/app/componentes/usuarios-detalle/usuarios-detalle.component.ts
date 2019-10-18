import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.component.html',
  styleUrls: ['./usuarios-detalle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuariosDetalleComponent implements OnInit {

  @Input()
  usuario: Usuario;

  @Input()
  mostrarBotonDelete: boolean = false;

  @Output()
  eliminarEvento: EventEmitter<Usuario> = new EventEmitter();

  constructor() {
    console.log('constructor del detalle');
  }

  ngOnInit() {
    console.log('ngOnInit del detalle');
  }

  eliminar() {
    this.eliminarEvento.emit(this.usuario);
  }

  // ngOnChanges() {
  //   console.log('ngOnChanges del detalle');
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck del detalle');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit del detalle');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked del detalle');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit del detalle');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked del detalle');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy del detalle');
  // }

}

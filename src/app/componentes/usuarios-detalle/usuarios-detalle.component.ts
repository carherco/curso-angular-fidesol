import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.component.html',
  styleUrls: ['./usuarios-detalle.component.css']
})
export class UsuariosDetalleComponent implements OnInit {

  @Input()
  usuario: Usuario;

  @Output()
  eliminarEvento: EventEmitter<Usuario> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  eliminar() {
    this.eliminarEvento.emit(this.usuario);
  }

}

import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { USERS } from 'src/app/data/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = USERS;
  usuarioSeleccionado: Usuario;
  usuarioNuevo: Usuario;

  lastId = 11;

  constructor(private router: Router) {
    this.usuarioNuevo = new Usuario(this.lastId);

  }

  ngOnInit() {
  }

  seleccionarUsuario(usuario: Usuario) {
    this.usuarioSeleccionado = {...usuario};
  }

  anyadirUsuario() {
    this.usuarios.push(this.usuarioNuevo);
    this.usuarioNuevo = new Usuario(++this.lastId);
  }

  eliminarUsuario(usuario: Usuario) {
    this.usuarios = this.usuarios.filter( u => u.id !== usuario.id );
  }

  eliminarUsuarioDesdeIndice(indice: number) {
    this.usuarios.splice(indice, 1);
  }

  editarUsuario(usuario: Usuario) {
    this.router.navigate(['/form/template/' + usuario.id]);
  }

}

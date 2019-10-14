import { UsuarioService } from './../../servicios/usuario.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, distinctUntilChanged, debounceTime, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios-master',
  templateUrl: './usuarios-master.component.html',
  styleUrls: ['./usuarios-master.component.css']
})
export class UsuariosMasterComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario;
  usuarioNuevo: Usuario;

  lastId = 11;

  usuarios$: Observable<Usuario[]>;
  suscripcion: any;

  @ViewChild('search', {static: true})
  search: ElementRef;

  constructor(private servicio: UsuarioService) {
    this.usuarioNuevo = new Usuario(this.lastId);

    this.usuarios$ = this.servicio.getAll();
    this.suscripcion = this.usuarios$.subscribe( x => this.usuarios = x );
  }

  ngOnInit() {

    fromEvent(this.search.nativeElement, 'keyup')
    .pipe(
      debounceTime(500),
      //tap( x => console.log('Flujo original: ', x) ),
      map( (eventInfo: any) => eventInfo.target.value ),
      //tap( x => console.log('Después de map: ',x) ),
      distinctUntilChanged(),
      filter( (value: string) => value.length > 3 ),
      //tap( x => console.log('Después de filter: ',x) ),
      //tap( x => console.log('Después de distinctUntilChanged: ',x) ),
      //tap( x => console.log('Después de debounceTime: ',x) ),
      switchMap( value => this.servicio.search(value) )
    )
    .subscribe( (x: Usuario[]) => this.usuarios = x );

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

  // ngOnDestroy() {
  //   this.suscripcion.unsuscribe();
  // }

}

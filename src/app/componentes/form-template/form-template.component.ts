import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { switchMap } from 'rxjs/operators';
import { TieneCambiosSinGuardar } from 'src/app/modelo/tiene-cambios-sin-guardar';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit, TieneCambiosSinGuardar {

  usuario: Usuario;

  @ViewChild('formulario', {static: false})
  formulario: any;

  constructor(private usuarioSVC: UsuarioService, private ruta: ActivatedRoute, private router: Router) {
    this.ruta.paramMap.subscribe( mapa => {
      const id = mapa.get('id');
      this.usuarioSVC.getOne(+id).subscribe( u => this.usuario = u ) ;
    });

    // this.ruta.paramMap
    // .pipe(
    //   switchMap( mapa => this.usuarioSVC.getOne(+mapa.get('id')) )
    // )
    // .subscribe( u => this.usuario = u );
  }

  ngOnInit() {
  }

  enviar() {
    console.log('Hacer lo que haya que hacer', this.usuario);
  }

  volver() {
    this.router.navigate(['/usuarios']);
  }

  tieneCambiosSinGuardar(): boolean {
    // this.formulario.dirty
    // this.formulario.submitted
    return true;
  }

}

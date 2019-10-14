import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {

  usuario: Usuario;
  formulario: FormGroup;
  nameCtlr: FormControl;
  telefonosCtrl: FormArray;

  constructor(private fb: FormBuilder, private usuarioSVC: UsuarioService, private ruta: ActivatedRoute, private router: Router) {
    this.ruta.paramMap.subscribe( mapa => {
      const id = mapa.get('id');
      this.usuarioSVC.getOne(+id).subscribe( u => {
        this.usuario = u;
        this.createForm();
      }) ;
    });

    // this.ruta.paramMap
    // .pipe(
    //   switchMap( mapa => this.usuarioSVC.getOne(+mapa.get('id')) )
    // )
    // .subscribe( u => this.usuario = u );


  }

  ngOnInit() {
  }

  createForm() {

    //this.formulario = new FormGroup({})

    this.nameCtlr = new FormControl(this.usuario.name, Validators.minLength(6));

    this.formulario = this.fb.group({
      //name: [this.usuario.name, Validators.minLength(6) ],
      name: this.nameCtlr,
      username: this.usuario.username,
      email: [this.usuario.email, Validators.email] ,
      address: this.fb.group({
        street: this.usuario.address.street,
        city: this.usuario.address.city,
        zipcode: this.usuario.address.zipcode
      })
    });

    // this.formulario.addControl('password', new FormControl('', Validators.required));
    // this.formulario.removeControl('address');

    // this.formulario.controls;
    // this.formulario.get('address');

    // this.telefonosCtrl = new FormArray([]);
    // this.telefonosCtrl.push(new FormGroup({}));
    // this.telefonosCtrl.removeAt(2);
    // this.telefonosCtrl.controls;
    // this.telefonosCtrl.value;

    this.nameCtlr.valueChanges.pipe(debounceTime(500)).subscribe( value => console.log(value) );
    this.formulario.valueChanges.subscribe( valueForm => console.log(valueForm) );

    this.formulario.patchValue(this.usuario);

  }

  enviar() {
    this.formulario.value;
  }

}

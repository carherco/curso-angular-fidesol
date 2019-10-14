import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private auth: AuthService, private ruta: ActivatedRoute) {
    // this.ruta.fragment.subscribe( (f: string) => {} );
  }

  ngOnInit() {
  }

  isLogged() {
    return this.auth.isLogged();
  }

}

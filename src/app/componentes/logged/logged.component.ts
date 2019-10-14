import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  nombre: string;

  constructor(private auth: AuthService) {
    this.nombre = this.auth.getUsername();
  }

  ngOnInit() {
  }

  salir() {
    this.auth.logOut();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy4RoutingModule } from './lazy4-routing.module';
import { Lazy4Component } from './componentes/lazy4/lazy4.component';


@NgModule({
  declarations: [Lazy4Component],
  imports: [
    CommonModule,
    Lazy4RoutingModule
  ]
})
export class Lazy4Module { }

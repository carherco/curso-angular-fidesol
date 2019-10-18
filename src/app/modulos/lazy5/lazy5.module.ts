import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy5RoutingModule } from './lazy5-routing.module';
import { Lazy5Component } from './componentes/lazy5/lazy5.component';


@NgModule({
  declarations: [Lazy5Component],
  imports: [
    CommonModule,
    Lazy5RoutingModule
  ]
})
export class Lazy5Module { }

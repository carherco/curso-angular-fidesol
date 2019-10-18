import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy3RoutingModule } from './lazy3-routing.module';
import { Lazy3Component } from './componentes/lazy3/lazy3.component';


@NgModule({
  declarations: [Lazy3Component],
  imports: [
    CommonModule,
    Lazy3RoutingModule
  ]
})
export class Lazy3Module { }

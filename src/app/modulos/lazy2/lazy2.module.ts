import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2Component } from './componentes/lazy2/lazy2.component';


@NgModule({
  declarations: [Lazy2Component],
  imports: [
    CommonModule,
    Lazy2RoutingModule
  ]
})
export class Lazy2Module { }

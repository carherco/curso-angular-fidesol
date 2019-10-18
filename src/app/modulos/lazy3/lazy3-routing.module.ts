import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy3Component } from 'src/app/modulos/lazy3/componentes/lazy3/lazy3.component';


const routes: Routes = [
  { path: '', component: Lazy3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy3RoutingModule { }

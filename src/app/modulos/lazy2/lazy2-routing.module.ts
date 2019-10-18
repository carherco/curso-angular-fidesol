import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy2Component } from 'src/app/modulos/lazy2/componentes/lazy2/lazy2.component';


const routes: Routes = [
  { path: '', component: Lazy2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy2RoutingModule { }

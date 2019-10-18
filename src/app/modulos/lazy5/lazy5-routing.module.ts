import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy5Component } from 'src/app/modulos/lazy5/componentes/lazy5/lazy5.component';


const routes: Routes = [
  { path: '', component: Lazy5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy5RoutingModule { }

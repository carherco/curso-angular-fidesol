import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PrimerComponent } from './componentes/primer/primer.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { UsuariosMasterComponent } from './componentes/usuarios-master/usuarios-master.component';
import { TemplateVariablesComponent } from 'src/app/componentes/template-variables/template-variables.component';
import { FormTemplateComponent } from 'src/app/componentes/form-template/form-template.component';
import { ObservablesComponent } from 'src/app/componentes/observables/observables.component';
import { UsuariosComponent } from 'src/app/componentes/usuarios/usuarios.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ConfirmGuard } from 'src/app/guards/confirm.guard';
import { FormReactivoComponent } from 'src/app/componentes/form-reactivo/form-reactivo.component';
import { ImpurePipeComponent } from 'src/app/componentes/impure-pipe/impure-pipe.component';


const routes: Routes = [
  { path: '', redirectTo: '/primer', pathMatch: 'full' },
  { path: 'primer', component: PrimerComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'galeria', component: GaleriaComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios-master', component: UsuariosMasterComponent },
  { path: 'template-variables', component: TemplateVariablesComponent},
  { path: 'form/template/:id', component: FormTemplateComponent, canDeactivate: [ConfirmGuard] },
  { path: 'form/template', component: FormTemplateComponent, canDeactivate: [ConfirmGuard] },
  { path: 'form/reactivo/:id', component: FormReactivoComponent },
  { path: 'observables', component: ObservablesComponent},
  { path: 'impure-pipe', component: ImpurePipeComponent},
  { path: 'lazy1', loadChildren: () => import('src/app/modulos/lazy1/lazy1.module').then(mod => mod.Lazy1Module) },
  { path: 'lazy2', loadChildren: () => import('src/app/modulos/lazy2/lazy2.module').then(mod => mod.Lazy2Module) },
  { path: 'lazy3', loadChildren: () => import('src/app/modulos/lazy3/lazy3.module').then(mod => mod.Lazy3Module) },
  { path: 'lazy4', loadChildren: () => import('src/app/modulos/lazy4/lazy4.module').then(mod => mod.Lazy4Module) },
  { path: 'lazy5', loadChildren: () => import('src/app/modulos/lazy5/lazy5.module').then(mod => mod.Lazy5Module) },
  // { path: 'facturacion', component: ObservablesComponent, canLoad: [AuthGuard, AdminGuard], loadchildren: 'src/app/admin/facturacion.module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

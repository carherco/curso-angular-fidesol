import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './componentes/primer/primer.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { RotateDirective } from './directivas/rotate.directive';
import { ExponentePipe } from './pipes/exponente.pipe';
import { EdadMinimaPipe } from './pipes/edad-minima.pipe';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuariosMasterComponent } from './componentes/usuarios-master/usuarios-master.component';
import { UsuariosDetalleComponent } from './componentes/usuarios-detalle/usuarios-detalle.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoggedComponent } from './componentes/logged/logged.component';
import { TemplateVariablesComponent } from './componentes/template-variables/template-variables.component';
import { FormTemplateComponent } from './componentes/form-template/form-template.component';
import { ObservablesComponent } from './componentes/observables/observables.component';
import { FormReactivoComponent } from './componentes/form-reactivo/form-reactivo.component';
import { ImpurePipeComponent } from './componentes/impure-pipe/impure-pipe.component';
import { Lazy1Module } from './modulos/lazy1/lazy1.module';
import { Lazy2Module } from './modulos/lazy2/lazy2.module';
import { Lazy3Module } from './modulos/lazy3/lazy3.module';
import { Lazy4Module } from './modulos/lazy4/lazy4.module';
import { Lazy5Module } from './modulos/lazy5/lazy5.module';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    OtroComponent,
    BindingComponent,
    ResaltarDirective,
    RotateDirective,
    ExponentePipe,
    EdadMinimaPipe,
    GaleriaComponent,
    UsuariosComponent,
    UsuariosMasterComponent,
    UsuariosDetalleComponent,
    CabeceraComponent,
    MenuComponent,
    LoginComponent,
    LoggedComponent,
    TemplateVariablesComponent,
    FormTemplateComponent,
    ObservablesComponent,
    FormReactivoComponent,
    ImpurePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Lazy1Module,
    //Lazy2Module,
    //Lazy3Module,
    //Lazy4Module,
    Lazy5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

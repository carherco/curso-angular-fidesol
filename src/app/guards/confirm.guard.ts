import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { FormTemplateComponent } from 'src/app/componentes/form-template/form-template.component';
import { TieneCambiosSinGuardar } from 'src/app/modelo/tiene-cambios-sin-guardar';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<TieneCambiosSinGuardar> {

  canDeactivate(
    component: TieneCambiosSinGuardar,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if ( component.tieneCambiosSinGuardar() ) {
        const respuesta = window.confirm('Tienes cambios sin guardar. ¿Seguro que quieres salir?');
        return respuesta;
      }

      return true;
  }


}

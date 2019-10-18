import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edadMinima'
})
export class EdadMinimaPipe implements PipeTransform {

  transform(datos: any[], edadMinima: number ): any[] {
    console.log('He entrado en la pipe');
    return datos.filter( item => item.edad >= edadMinima );
  }

}

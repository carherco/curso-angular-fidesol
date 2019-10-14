import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExponentePipe implements PipeTransform {

  transform(value: number, exponente: number = 2): number {
    return value ** exponente;
  }

}

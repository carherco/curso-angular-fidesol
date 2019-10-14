import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  numero: number;
  private subs3;
  constructor() { }

  ngOnInit() {

    // Creación de observable básico
    // const Obs1$ = Observable.create(function (emmiter) {
    //   emmiter.next('Hello');
    //   emmiter.next('World');
    //   emmiter.complete();
    // });

    const Obs1$ = from(['Hello', 'World']);

    Obs1$.subscribe(
      x => { console.log('Emisión: ', x); },
      e => { console.log('Error: ', e); },
      () => { console.log('Fin'); }
    );

    //Creación de observable "infinito"
    // const Obs2$ = Observable.create(function(emmiter) {
    //   let value = 0;
    //   const interval = setInterval(
    //     () => {
    //       if (value % 2 === 0) {
    //         emmiter.next(value);
    //       }
    //       value++;
    //     }, 1000);

    //   return () => {
    //       clearInterval(interval);
    //       console.log('Me he quedado sin observador');
    //     };
    // });

    // const subs2 = Obs2$.subscribe(x => console.log('subs2:', x));

    // // unsubscribe after 10 seconds
    // setTimeout(() => {
    //   subs2.unsubscribe();
    // }, 10000);

    // setTimeout(() => {
    //   this.subs3 = Obs2$.subscribe( x => {console.log('subs3:', x); this.numero = x; });
    // }, 5000);

    // // Son Observables fríos:
    // // - Una instancia por cada subscripción
    // // - El observable empieza en el momento de la subscripción
    // // - Desuscribirse del observable para liberar memoria


    // Introducción a los operadores
    Obs1$.pipe(
      map( x => x.toUpperCase() )
    )
    .subscribe(
      function (x) { console.log('Emisión:', x); },
      function (e) { console.log('Error:', e); },
      function () { console.log('Fin'); }
    );




    Obs1$.pipe(
      map( (x: string) => x.toUpperCase()),
      map( (x: string) => x.split("").reverse().join(""))
     )
    .subscribe(
      function (x) { console.log('Emisión:', x); },
      function (e) { console.log('Error:', e); },
      function () { console.log('Fin'); }
    );

  }

  ngOnDestroy() {
    // this.subs3.unsubscribe();
  }

}

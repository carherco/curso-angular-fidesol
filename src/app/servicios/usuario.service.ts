import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { USERS } from 'src/app/data/usuarios';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi = environment.url_api + 'users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlApi).pipe( retry(2) );
    // return of(USERS);
  }

  getOne(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.urlApi + '/' + id);
    // return of(USERS[id - 1]);
  }

  save(usuario: Usuario) {
    return this.http.post(this.urlApi, usuario);
  }

  search(email: string = ''): Observable<Usuario[]>  {
    let url = this.urlApi;
    if (email !== '') {
      url = this.urlApi + '?email=' + email;
    }
    return this.http.get<Usuario[]>(url);
  }
}

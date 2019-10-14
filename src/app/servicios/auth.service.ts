import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logIn(username: string, password: string): boolean {
    if (username === 'test' && password === 'test') {
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logOut(): boolean {
    localStorage.removeItem('username');
    return true;
  }

  isLogged(): boolean {
    if (localStorage.getItem('username') ) {
      return true;
    }
    return false;
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  hasRol(rol: string) {

  }
}

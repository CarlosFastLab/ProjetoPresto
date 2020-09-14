import { Usuario } from './usuario/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line: import-spacing
import { map }from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<Usuario> {
    return this.http.get<Usuario>('http://localhost:8080/spotify/usuariosEmail/' + email)
      .pipe(
        map(usuario => {
          if(usuario.senha === senha) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
          }

          return usuario;
        })
      );
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
  }

  loggedUser(): Usuario {
    return JSON.parse(localStorage.getItem('usuarioLogado'));
  }
}

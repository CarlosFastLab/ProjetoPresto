import { Usuario } from '../usuario/usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map }from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mostrarMenuEmitter = new EventEmitter<Boolean>()
  usuarioAutenticado: boolean = false
  retornoSenha: boolean = true

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, senha: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/usuario/getemail/' + email)
      .pipe(
        map(usuario => {
          if(usuario.senha == senha) {
            this.usuarioAutenticado = true;
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            // this.router.navigate(['/pedidos'])
            this.mostrarMenuEmitter.emit(true)
            this.retornoSenha = true
            return this.retornoSenha
          } else {
            this.mostrarMenuEmitter.emit(false)
            this.retornoSenha = false
            return this.retornoSenha
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

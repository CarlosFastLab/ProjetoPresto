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
  usuarioAutenticado: Boolean = false

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, senha: string): Observable<Usuario> {
    return this.http.get<Usuario>('http://localhost:8080/presto/usuariosEmail/' + email)
      .pipe(
        map(usuario => {
          if(usuario.senha === senha) {
            this.usuarioAutenticado = true;
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            this.router.navigate(['/pedidos'])
            this.mostrarMenuEmitter.emit(true)
          } else {
            alert("Usuario ou senha invalidos!")
            this.usuarioAutenticado = false
            this.mostrarMenuEmitter.emit(false)
          }
          return usuario;
        })
      );
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    this.usuarioAutenticado = false
    this.mostrarMenuEmitter.emit(false)
  }

  loggedUser(): Usuario {
    return JSON.parse(localStorage.getItem('usuarioLogado'));
  }

  usuarioEstaLogado(): boolean{
    if(this.usuarioAutenticado){
      return true
    }
    return false
  }

}
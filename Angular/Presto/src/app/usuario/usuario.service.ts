import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";
  httpOptions = {
    header: new HttpHeaders({'Content-Type': 'application/json' })
  }

  getUsuario(): Observable <Usuario[]>{
    return this.http.get<Usuario[]>(this.url + "/presto/usuarios")
  }

  getUsuarioByEmail(email: String): Observable <Usuario[]>{
    const url = `${this.url}/${email}`;
    return this.http.get<Usuario[]>(this.url + "/presto/usuarios")
  }

  update(usuario: Usuario): Observable <any> {
      return this.http.put(this.url, usuario).pipe(
          tap(updateU => console.log(`usuario atualizado email=${usuario.email}`))
      )
  }

  addUsuario(usuario: Usuario):  Observable <any>{
    return this.http.post<Usuario>(this.url + "/presto/usuarios", usuario).pipe(
      tap((newUsuario: Usuario) => console.log(`usuario adicionado email= ${newUsuario.email}`))
    )
  }

}

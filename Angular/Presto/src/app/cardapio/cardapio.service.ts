import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../produto/produto';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }

  produtos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:8080/produto/produtos`);
  }

  // produtoPorId(id: number): Observable<Produto> {
  //   return this.http.get<Produto>(`http://localhost:8080/produto/${id}`)
  // }

  produtoPorTipo(tipo: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:8080/produto/gettipo/${tipo}`);
  }

}

import { Cardapio } from './cardapio';
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

  cardapioPornome(nome : string){
    return this.http.get<Cardapio>(`http://localhost:8080/cardapio/getnome/${nome}`);
  }

  // produtoPorId(id: number): Observable<Produto> {
  //   return this.http.get<Produto>(`http://localhost:8080/produto/${id}`)
  // }

  produtoPorTipo(tipo: string, nome : string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:8080/cardapio/getfiltro/${nome}/${tipo}`);
  }
}

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from '../cardapio/cardapio';
import { Produto } from '../produto/produto';

@Injectable({
  providedIn: 'root'
})
export class ShowCardapioService {

  cardapio: Cardapio[];

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCardapio(): Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(this.url + "/cardapio/cardapios")
  }

  getProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url + "produto/produtos")
  }

  show(i: number): Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(this.url + "cardapio/cardapios" + i)
  }
}

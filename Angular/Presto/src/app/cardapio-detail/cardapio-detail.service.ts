import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from '../cardapio/cardapio';
import { Produto } from '../produto/produto';

@Injectable({
  providedIn: 'root'
})
export class CardapioDetailService {

  cardapio: Cardapio[]

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080"
  httpoOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'appication/json'
    })
  }

  getCardapio(): Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(this.url +"/cardapio/casrdapios")
  }

  getProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url + "/produto/produto")
  }

  show(i: number): Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(this.url + "/cardapio/getById")
  }

}

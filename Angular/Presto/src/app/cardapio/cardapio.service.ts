import { Cardapio } from './cardapio';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }

  showCardapio(i: number): Observable <Cardapio[]> {
    return this.http.get<Cardapio[]>("/cardapio/cardapios" + i)
  }

  getCardapio(): Observable <Cardapio[]>{
    return this.http.get<Cardapio[]>(this.url + "/cardapio/cardapios")
  }

  // getProdutoByName(name: Name): Observable <Cardapio[]>{
  //   const url = `${this.url}/${name}`;
  //   return this.http.get<Cardapio[]>(this.url + "/produto/getByName")
  // }

}

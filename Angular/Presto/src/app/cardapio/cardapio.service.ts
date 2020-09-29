import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from './cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applicarion/json'
    })
  }

  show(i: number): Observable<Cardapio> {
    return this.http.get<Cardapio>("/cardapio/getbyid/" + i)
  }

  getCardapio(): Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(this.url + "/cardapio/cardapios")
  }

}

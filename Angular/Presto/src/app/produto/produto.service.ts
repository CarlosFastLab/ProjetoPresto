import { Produto } from './produto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080"

  getProduto(): Observable<Produto[]>{ 
    return this.http.get<Produto[]>(this.url + "/produtos/produtos")
  }
}

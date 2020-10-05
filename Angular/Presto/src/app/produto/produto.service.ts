import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

   produtos(): Observable<Produto[]> {
     return this.http.get<Produto[]>(`http://localhost:8080/produto/produtos`);
   }

  addProduto(produto: Produto):  Observable <any>{
    return this.http.post<Produto>("http://localhost:8080/produto/create", produto)
  }

  updateProduto(produto: Produto, nome: string): Observable<any> {
    return this.http.put<Produto>("http://localhost:8080/update/" + nome, produto)
  }
}

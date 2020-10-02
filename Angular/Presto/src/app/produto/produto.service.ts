import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  // produtos(): Observable<Produto[]> {
  //   return this.http.get<Produto[]>(`http://localhost:8080/produto/produtos`);
  // }

}

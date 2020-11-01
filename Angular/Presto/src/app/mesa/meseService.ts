import { Mesa } from './mesa';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../pedidos/pedido';
import { Produto } from '../produto/produto';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }

  getAllMesas() : Observable<any>{
    return this.http.get<any>("http://localhost:8080/mesa/mesas")
  }

  criarMesa(mesa : Mesa): Observable<any>{
    return this.http.post<any>("http://localhost:8080/mesa/create", mesa)
  }

  criarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>("http://localhost:8080/pedido/create", pedido)
  }

  addPedidoMesa(nome: string, pedido: Pedido): Observable<any>{
    return this.http.put<any>("http://localhost:8080/mesa/addpedido/" + nome, pedido)
  }

  addProdutosPedido(produtos: Produto[], id: number): Observable<any> {
    return this.http.put<any>("http://localhost:8080/pedido/addprodutos/" + id, produtos);
  }
}



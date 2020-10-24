import { Mesa } from './mesa';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

}



import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { CardapioService } from './cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: Produto[]

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapioService.produtos().subscribe(
      produtosLista => {
        this.produtos = produtosLista;
      }
    )
  }

}

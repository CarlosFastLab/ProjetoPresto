import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { Cardapio } from './cardapio';
import { CardapioService } from './cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: Produto[]
  cardapio: Cardapio
  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapioService.cardapioPornome("Geral").subscribe(
      cardapio => {
        this.cardapio = cardapio;
        this.produtos = this.cardapio.produtos;
      }
    )
  }

  exibirfiltroGeral(){
    this.cardapioService.cardapioPornome("Geral").subscribe(
      cardapio => {
        this.cardapio = cardapio;
        this.produtos = this.cardapio.produtos;
      }

    );
  }
  exibirfiltroComida(){
    this.cardapioService.produtoPorTipo("comida", "Geral").subscribe(
      produtosLista => {
        this.produtos = produtosLista;
      }
    );
  }
  exibirfiltroBebida(){
    this.cardapioService.produtoPorTipo("bebida", "Geral").subscribe(
      produtosLista => {
        this.produtos = produtosLista;
      }
    );
  }

}

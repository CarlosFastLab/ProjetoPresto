import { ProdutoService } from './../produto/produto.service';
import { Cardapio } from './../cardapio/cardapio';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ActivatedRoute } from '@angular/router';
import { CardapioService } from '../cardapio/cardapio.service';

@Component({
  selector: 'app-cardapio-detail',
  templateUrl: './cardapio-detail.component.html',
  styleUrls: ['./cardapio-detail.component.css']
})
export class CardapioDetailComponent implements OnInit {

  cardapioId: number

  cardapio: Cardapio

  produto: Produto[]

  constructor(private route: ActivatedRoute, private c: CardapioService, private p: ProdutoService) { }

  ngOnInit(): void {
    this.cardapioId = Number(this.route.snapshot.paramMap.get("id"))

    this.c.show(this.cardapioId).subscribe(
      cardapio => {
        this.cardapio = cardapio
      }
    )

    // this.c.getCardapio().subscribe(
    //   cardapio => {
    //     this.cardapio = cardapio
    //   }
    // )

    this.p.getProduto().subscribe(
      produto => {
        this.produto = produto
      }
    )
  }

}

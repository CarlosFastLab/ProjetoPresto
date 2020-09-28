import { ProdutoService } from './../produto/produto.service';
import { CardapioService } from './../cardapio/cardapio.service';
import { Produto } from './../produto/produto';
import { Cardapio } from './../cardapio/cardapio';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-cardapio',
  templateUrl: './show-cardapio.component.html',
  styleUrls: ['./show-cardapio.component.css']
})
export class ShowCardapioComponent implements OnInit {

  cardapioId: number;

  cardapio: Cardapio[];

  produto: Produto[];

  constructor(private route: ActivatedRoute, private c: CardapioService, private p: ProdutoService) { }

  ngOnInit(): void {
    this.cardapioId = Number(this.route.snapshot.paramMap.get("id"));

    this.c.showCardapio(this.cardapioId).subscribe(
      cardapio => {
        this.cardapio = cardapio;
      }
    );

    this.c.getCardapio().subscribe(
      cardapio => {
        this.cardapio = cardapio;
      }
    );

    this.p.getProduto().subscribe(
      produto => {
        this.produto = produto;
      }
    );
  }

}

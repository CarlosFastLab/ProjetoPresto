import { CardapioService } from './../cardapio.service';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../produto/produto';

@Component({
  selector: 'app-produto-cardapio',
  templateUrl: './produto-cardapio.component.html',
  styleUrls: ['./produto-cardapio.component.css']
})
export class ProdutoCardapioComponent implements OnInit {

  @Input() produto: Produto;

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
  }

  removerProdutoDoCardapio(produto : Produto) {
    console.log("ts", produto.nome);
    this.cardapioService.removeProduto("Geral", produto).subscribe(
      removeProduto => {
        console.log(removeProduto);
      }
    );
    location.reload();
  }

}

import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto[]

  constructor(private p: ProdutoService) { }

  ngOnInit(): void {
    this.p.getProduto().subscribe(
      produto => {
        this.produto = produto
      }
    )
  }

}

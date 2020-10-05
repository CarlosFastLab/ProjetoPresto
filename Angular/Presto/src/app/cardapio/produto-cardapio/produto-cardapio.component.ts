import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../produto/produto';

@Component({
  selector: 'app-produto-cardapio',
  templateUrl: './produto-cardapio.component.html',
  styleUrls: ['./produto-cardapio.component.css']
})
export class ProdutoCardapioComponent implements OnInit {

  @Input() produto: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}

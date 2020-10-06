import { CardapioService } from './../cardapio/cardapio.service';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  nome:string;
  updateProdutoForm: FormGroup;
  produtos: Produto[];

  constructor(private produtoService: ProdutoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.produtoService.produtos().subscribe(
      produtosLista => {
        this.produtos = produtosLista
      }
    );
    this.updateProdutoForm = this.fb.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      tempo: ['', [Validators.required]],
      imagem: ['', [Validators.required]]
    })
  }



  capturaNome(nome: string){
    console.log(nome);
    this.nome = nome;
  }

  updateProduto(nome: string) {
    this.produtoService.updateProduto(this.updateProdutoForm.value, nome).subscribe(
      produtoAtualizado => {console.log(produtoAtualizado)}
    )
  }


  addNoCardapio(produto: Produto){
    this.produtoService.adicionarProdutoNocardapio("Geral", produto).subscribe(
      produtoadcionado =>{
        this.produtos = produtoadcionado.produtos;
      }
    )
  }
}

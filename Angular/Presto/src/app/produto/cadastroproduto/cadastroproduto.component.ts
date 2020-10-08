import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {

  produtoForm: FormGroup;
  data: any;
  produto: Produto;

  constructor(private fb: FormBuilder, private prod: ProdutoService) { }

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      tempo: ['', [Validators.required]],
      imagem: ['', [Validators.required]]
    })
  }

  inserirProduto(){
    console.log(this.produtoForm.value)
    this.prod.addProduto(this.produtoForm.value).subscribe(
      (produtoInserido) => console.log(produtoInserido)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {

  updateProdutoForm: FormGroup;
  data: any;
  produto: Produto;
  nome: string;

  constructor(private fb: FormBuilder, private prodUp: ProdutoService) { }

  ngOnInit(): void {
    this.updateProdutoForm = this.fb.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      tempo: ['', [Validators.required]],
      imagem: ['', [Validators.required]]
    })
  }

  capturaNome(nome: string){
    this.nome = nome
    console.log(nome)
  }

  updateProduto(nome: string){
    this.prodUp.updateProduto(this.updateProdutoForm.value, this.nome).subscribe(
      (produtoAtualizado) => console.log(produtoAtualizado)
    )
  }

}

import { CardapioService } from './../cardapio/cardapio.service';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  nome:string;
  updateProdutoForm: FormGroup;
  produtos: Produto[];


  produtoForm: FormGroup;
  data: any;
  produto: Produto;

  imageForm: FormGroup;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  formData = new FormData();

  constructor(private produtoService: ProdutoService, private fb: FormBuilder, private fbImage: FormBuilder, private http:HttpClient) { }

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

    this.imageForm = this.fbImage.group({
      profile: ['']
    })
  }
  load() {
    sessionStorage.refresh = true;
    console.log('sessionStorage', sessionStorage);
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh)
        && location.reload();
    sessionStorage.refresh = false;
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
        this.load()
      }
    )
  }

  deletarProduto(id: Number) {
    this.produtoService.deleteProduto(id).subscribe(
      produtoDeletado => {
        this.produtos = produtoDeletado;
        this.load()
      }
    )
  }

  // Edit product
  // public onFileChanged(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.imageForm.get('profile').setValue(file);
  //   }
  // }


  // uploadarImage(file: File) {
  //   this.produtoService.uploadImage(file).subscribe(
  //     (response) => {
  //       if (response.status === 500) {
  //         console.log("Upload bem sucedido");
  //       } else {
  //         console.log("Upload mal sucedido");
  //       }
  //     }
  //   );
  // }
}

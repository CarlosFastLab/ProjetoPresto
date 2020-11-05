import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {

  produtoForm: FormGroup;
  data: any;
  produto: Produto;

  imagemForm: FormGroup;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  formData = new FormData();

  constructor(private fb: FormBuilder, private prod: ProdutoService, private fbImagem: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valor : [Number, [Validators.required]],
      tempo: ['', [Validators.required]],
      imagem: [[''], [Validators.required]]
    })

    this.imagemForm = this.fbImagem.group({
      profile: ['']
    })
  }


  public onFileChanged(event) {
    //Select File
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imagemForm.get('profile').setValue(file);
    }
  }

  // onUpload() {
  //   this.formData.append('file', this.imagemForm.get('profile').value);
  //   console.log(this.formData);
  // }

  inserirProduto(){
    console.log(this.produtoForm.value);

    this.formData.append('nome', this.produtoForm.get('nome').value);
    this.formData.append('tipo', this.produtoForm.get('tipo').value);
    this.formData.append('descricao', this.produtoForm.get('descricao').value);
    this.formData.append('tempo', this.produtoForm.get('tempo').value);
    this.formData.append('valor', this.produtoForm.get('valor').value);
    this.formData.append('file', this.imagemForm.get('profile').value);

    this.http.post("http://localhost:8080/produto/create", this.formData).subscribe(event => {console.log(event)});
  }

  // uploadarImage(file: File) {
  //   this.prod.uploadImage(file).subscribe();
  // }

}

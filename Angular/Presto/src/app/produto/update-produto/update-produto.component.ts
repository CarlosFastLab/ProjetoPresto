import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent {
  constructor(private produtoService: ProdutoService, private formBuilder: FormBuilder, private http: HttpClient) { }
    selectedFile: File;

    retrievedImage: any;

    base64Data: any;

    retrieveResonse: any;

    message: string;

    imageName: any;

    uploadForm: FormGroup;
    //Gets called when the user selects an image

    ngOnInit(){
      this.uploadForm = this.formBuilder.group({
        profile: ['']
      });
    }

    public onFileChanged(event) {

      //Select File
      if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }

    }
    //Gets called when the user clicks on submit to upload the image

    onUpload() {
      const fromData = new FormData();
      fromData.append('file', this.uploadForm.get('profile').value);
      this.http.post<any>("http://localhost:8080/image/create", fromData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
      );



    //       this.produtoService.uploadImage(this.selectedFile).subscribe(
    //   (response) => {
    //     if (response.status === 500) {
    //       console.log("Upload bem sucedido");
    //     } else {
    //       console.log("Upload mal sucedido");
    //     }
    //   }
    // );
    }

      //Gets called when the user clicks on retieve image button to get the image from back end
      getImage() {

    }
  }


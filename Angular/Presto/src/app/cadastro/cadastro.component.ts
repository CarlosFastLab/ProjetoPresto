import { Usuario } from './../usuario/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioForm: FormGroup;

  data: any;

  usuario: Usuario;

  constructor(private fb: FormBuilder,private us: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required]
    });
  }

  // inserir() {
  //   console.log(this.usuarioForm.value);
  //   this.us.insert(this.usuarioForm.value);
  // }

  inserirUsuario() {
    this.us.addUsuario(this.usuarioForm.value).subscribe(
      (usuarioInserido) => console.log(usuarioInserido)
    );
  }

  obter() {
    this.data = this.usuarioForm.value;
    this.us = this.data;
  }



}

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
      email: ['', [Validators.email, Validators.required]],
      confemail: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
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

    this.usuarioForm.reset(new Usuario);
  }

  obter() {
    this.data = this.usuarioForm.value;
    this.us = this.data;
  }

  confereEmailValidator(email){
    if (this.usuarioForm.value.email === this.usuarioForm.value.confemail) {
        return true;
    }
    return false;
  }
}

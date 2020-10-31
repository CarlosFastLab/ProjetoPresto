import { UsuarioService } from './../usuario/usuario.service';
import { AuthService } from './../authService/authservice.service';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { Usuario } from '../usuario/usuario';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  data: any;

  usuario: Usuario;

  emailRedef = "";

  errorMessage = "";
  successMessage = "";

  errorMessageLogin = "";
  successMessageLogin = "";

  loading = false;

  signInForm : FormGroup;
  // return: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private usuarioSevice : UsuarioService, private route: Router){ }

  ngOnInit(): void {
    this.signInForm = this.fb.group(
      {
        email: ['', [Validators.email, Validators.required]],
        senha: ['', [Validators.required]]
      }
    );
  }

  login() {
    console.log("Login chamado")
    console.log(this.signInForm.value.email)
    this.authService.login(this.signInForm.value.email, this.signInForm.value.senha).subscribe(
      // (response) => {
      //   console.log('response')
      //   this.successMessageLogin = response;
      //   setTimeout(() => { this.route.navigate(['/pedidos']); }, 2000)
      // },
      // (error) => {
      //   console.log('error')
      //   this.errorMessageLogin = error
      //   this.loading = false
      // }
      retorno => {
        if (retorno) {
          console.log('response')
          this.successMessageLogin = "Login efetuado com sucesso";
          setTimeout(() => { this.route.navigate(['/pedidos']); }, 2000)
        } else {
          console.log('error')
          this.errorMessageLogin = "Usuario e senha invalido"
          this.loading = false
        }
      },
      (error) => {
        console.log('error')
        this.errorMessageLogin = error
        this.loading = false
      }
    );
  }

  loggedUser() {
    this.authService.loggedUser()
  }

  async enviarSenhaPorEmail(){
    this.usuarioSevice.redefinirSenha(this.emailRedef).subscribe(
      (response)  => {
        console.log('response received');
        this.successMessage = response;
      },
      (error) => {
        console.log('Error caught in component!')
        this.errorMessage = error;
      }
    );
  }
}

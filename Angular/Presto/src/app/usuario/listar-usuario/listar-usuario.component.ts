import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private http: HttpClient) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(
      listaUsuarios => {
        this.usuarios = listaUsuarios
      }
    )
  }


}

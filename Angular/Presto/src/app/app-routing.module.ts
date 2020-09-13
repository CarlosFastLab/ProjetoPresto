import { CadastroComponent } from './cadastro/cadastro.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:"login" , redirectTo:"/login", pathMatch:"full"},
  {path : "login" , component : LoginComponent},
  {path : "cadastro",  component : CadastroComponent},
  {path : "pedidos" ,  component : PedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ProdutoComponent } from './produto/produto.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { GuardRouter } from './guard/guardRouter';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 // { path:"" , redirectTo:"/login", pathMatch:"full"},
  { path : "login" , component : LoginComponent},
  { path : "cadastro",  component : CadastroComponent , canActivate : [GuardRouter]},
  { path : "pedidos" ,  component : PedidosComponent , canActivate : [GuardRouter]},
  { path : "cardapio", component : CardapioComponent,  canActivate : [GuardRouter]},
  { path : "produto", component : ProdutoComponent,  canActivate : [GuardRouter]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

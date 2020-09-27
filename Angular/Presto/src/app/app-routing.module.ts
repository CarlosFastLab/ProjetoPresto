import { CadastroComponent } from './cadastro/cadastro.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardRouters } from './guard/guardRouters';
import { ProdutoComponent } from './produto/produto.component';
import { CardapioComponent } from './cardapio/cardapio.component';

const routes: Routes = [
  { path:"" , redirectTo:"/login", pathMatch:"full"},
  { path : "login" , component : LoginComponent},
  { path : "cadastro",  component : CadastroComponent},
  { path : "cardapio",  component : CardapioComponent, canActivate: [GuardRouters]},
  { path : "produto",  component : ProdutoComponent, canActivate: [GuardRouters]},
  { path : "pedidos" ,  component : PedidosComponent, canActivate: [GuardRouters]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

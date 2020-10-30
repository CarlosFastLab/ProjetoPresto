import { CardapioService } from './cardapio/cardapio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SwitchComponent } from './switch/switch.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuardRouters } from './guard/guardRouters';
import { ProdutoComponent } from './produto/produto.component';
import { CardapioComponent } from './cardapio/cardapio.component';

import { CadastroprodutoComponent } from './produto/cadastroproduto/cadastroproduto.component';
import { ProdutoCardapioComponent } from './cardapio/produto-cardapio/produto-cardapio.component';
import { UpdateProdutoComponent } from './produto/update-produto/update-produto.component';
import { MesaComponent } from './mesa/mesa.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    PedidosComponent,
    CadastroComponent,
    SwitchComponent,
    ProdutoComponent,
    CardapioComponent,
    CadastroprodutoComponent,
    ProdutoCardapioComponent,
    UpdateProdutoComponent,
    MesaComponent,
    ListarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GuardRouters
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

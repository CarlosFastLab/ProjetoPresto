import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MesaService } from './mesaService';
import { Component, OnInit } from '@angular/core';
import { Mesa } from './mesa';
import { Pedido } from '../pedidos/pedido';
import { CardapioService } from '../cardapio/cardapio.service';
import { Produto } from '../produto/produto';


@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  mesas: Mesa[]
  mesaForm: FormGroup
  mesa: Mesa
  mesaNome: string;

  pedido: Pedido;
  pedidoMesa: Pedido;
  pedidoForm: FormGroup;

  produtosCardapio: Produto[];
  produtosPedido: Produto[] = new Array;
  booleanoLista: boolean = false;

  public hora = 0;
  public minuto = 0;
  public segundo = 0;

  constructor(private mesaService: MesaService, private fb: FormBuilder, private cardapioService: CardapioService ) { }

  ngOnInit(): void {
    this.mesaService.getAllMesas().subscribe(
      mesa => {
        this.mesas = mesa;
      }
    )

    this.cardapioService.cardapioPornome('Geral').subscribe(
      cardapioRetorno => {
        this.produtosCardapio = cardapioRetorno.produtos;
      }
    )


    this.mesaForm = this.fb.group({
      nome: ['', [Validators.required]]
    })

    this.pedidoForm = this.fb.group({
      descricao: ['', [Validators.required]],
    })

  }

  criarMesa() {
    this.mesaService.criarMesa(this.mesaForm.value).subscribe(
      mesa1 => {
        console.log(mesa1)
      }
    )
  }

  start() {
    setInterval(() => {
      this.segundo += 1;
      if (this.segundo === 60) {
        this.segundo = 0;
        this.minuto += 1;
        if (this.minuto === 60) {
          this.minuto = 0
          this.hora += 1
          if (this.hora === 4) {
            this.hora = 0;
          }
        }
      }
    }, 1000)
  }

  capturaNomeMesa(nome: string) {
    console.log(nome);
    this.mesaNome = nome;
  }

  addPedidoNaMesa() {
    this.mesaService.addPedidoMesa(this.mesaNome, this.pedidoForm.value).subscribe(
      pedidoReceive => {
        this.booleanoLista = true
        this.pedido = pedidoReceive
        console.log(pedidoReceive)
      }
    )
  }

  addProdutoPedido(produto: Produto) {
    this.produtosPedido.push(produto);
    console.log(this.produtosPedido);
  }

  registarProdutosPedido() {
    this.mesaService.addProdutosPedido(this.produtosPedido, this.pedido.id).subscribe(
      produtosDoPedio => {
        this.pedido = produtosDoPedio;
        this.booleanoLista = false;
        while(this.produtosPedido.length){
          this.produtosPedido.pop();
        }
      }
    )
  }

  pedidoDaMesa(id : number){
    this.mesaService.pedidoDaMesa(id).subscribe(
      pedido => {
        this.pedidoMesa = pedido;
        console.log(this.pedidoMesa);
      }
    )
  }

  removePedidoDaMesa(idMesa: number, idPedido: number) {
    this.mesaService.removePedidoMesa(idMesa, idPedido).subscribe(
      pedidoRemovido => {
        console.log(pedidoRemovido);
      }
    )
  }
}

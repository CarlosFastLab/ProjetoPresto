import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MesaService } from './meseService';
import { Component, OnInit } from '@angular/core';
import { Mesa } from './mesa';
import { Pedido } from '../pedidos/pedido';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  mesas :  Mesa[]
  mesaForm : FormGroup
  mesa: Mesa
  public hora  = 0;
  public minuto = 0;
  public segundo = 0;
  pedido: Pedido;


constructor(private mesaService : MesaService, private  fb : FormBuilder ) { }

  ngOnInit(): void {
    this.mesaService.getAllMesas().subscribe(
      mesa => {
        this.mesas = mesa;
      }
    )

    this.mesaForm = this.fb.group({
      nome: ['', [Validators.required]]
    })

  }

  criarMesa(){
    this.mesaService.criarMesa(this.mesaForm.value).subscribe(
      mesa1 => {
        console.log(mesa1)
      }
    )
  }

  start(){
    setInterval(()=>{
      this.segundo += 1;
      if(this.segundo === 60){
        this.segundo = 0;
        this.minuto += 1;
        if(this.minuto === 60){
          this.minuto = 0
          this.hora += 1
          if(this.hora === 4){
            this.hora = 0;
          }
        }
      }},1000)
  }

  criarPedido(mesa: Mesa){
    this.mesa = mesa
    this.mesaService.criarPedido(this.pedido).subscribe(
      pedidoRetorno => {
        this.mesaService.addPedidoMesa(pedidoRetorno, mesa.nome)
      }
    )
  }

}

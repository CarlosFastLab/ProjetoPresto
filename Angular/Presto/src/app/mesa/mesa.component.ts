import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MesaService } from './meseService';
import { Component, OnInit } from '@angular/core';
import { Mesa } from './mesa';
import { Pedido } from '../pedidos/pedido';
import { ActivatedRoute } from '@angular/router';

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

  data: any;

  mesaNome: string;

  pedidoForm: FormGroup;


constructor(private mesaService : MesaService, private  fb : FormBuilder, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.mesaService.getAllMesas().subscribe(
      mesa => {
        this.mesas = mesa;
      }
    )

    this.mesaForm = this.fb.group({
      nome: ['', [Validators.required]]
    })

    this.pedidoForm = this.fb.group({
      descricao: ['', [Validators.required]],
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

  capturaNomeMesa(nome: string) {
    console.log(nome);
    this.mesaNome = nome;
  }

  addPedidoNaMesa() {
    this.mesaService.addPedidoMesa(this.mesaNome, this.pedidoForm.value).subscribe(
      pedidoReceive => {
        this.pedido = pedidoReceive;
      }
    )
  }
}

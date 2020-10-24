import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MesaService } from './meseService';
import { Component, OnInit } from '@angular/core';
import { Mesa } from './mesa';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  mesas :  Mesa[]
  mesa : FormGroup

constructor(private mesaService : MesaService, private  fb : FormBuilder ) { }

  ngOnInit(): void {
    this.mesaService.getAllMesas().subscribe(
      mesa => {
        this.mesas = mesa;
      }
    )

    this.mesa = this.fb.group({
      nome: ['', [Validators.required]]
    })

  }

  criarMesa(){
    this.mesaService.criarMesa(this.mesa.value).subscribe(
      mesa1 => {
        console.log(mesa1)
      }
    )
  }
}

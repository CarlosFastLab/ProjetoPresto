import { Component, OnInit } from '@angular/core';
import { Cardapio } from './cardapio';
import { CardapioService } from './cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  
  cardapio: Cardapio[]

  constructor(private c: CardapioService) { }

  ngOnInit(): void {
    this.c.getCardapio().subscribe(
      cardapio => {
        this.cardapio = cardapio
      }
    )
  }

}

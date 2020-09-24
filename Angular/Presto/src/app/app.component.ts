import { Component } from '@angular/core';
import { AuthService } from './authService/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarMenu = false;
  title = 'Presto';

  constructor(private authservice: AuthService) {
  }

  ngOnInit(){
    this.authservice.mostrarMenuEmitter.subscribe(mostrar => this.mostrarMenu = mostrar)
  }
}

import { AuthService } from './../authService/authservice.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class GuardRouter implements CanActivate{

  constructor(private usuario : AuthService, private route : Router ){}

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | boolean{
    if(this.usuario.usuarioEstaLogado()=== false){
      this.route.navigate(['/login']);
    }
    return this.usuario.usuarioEstaLogado()
  }
}

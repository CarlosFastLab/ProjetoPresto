// import { Route } from '@angular/compiler/src/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authService/authservice.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GuardRouters implements CanActivate {
  constructor(private usuario: AuthService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    if (!this.usuario.loggedUser()) {
      this.route.navigate(['/login']);
      return false
    }
    return true
  }
}

import { AuthService } from './../authService/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
  }

  loggedUser() {
    return this.authService.loggedUser();
  }

}

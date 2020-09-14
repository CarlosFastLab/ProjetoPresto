
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm : FormGroup;
  return: string = '';

  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.signInForm = this.fb.group(
      {
        email: [''],
        senha: ['']
      }
    );
  }


}

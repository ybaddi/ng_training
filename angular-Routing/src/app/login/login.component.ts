import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public  authService : AuthService) {
    this.message = '';
  }

  ngOnInit() {
  }

  login(username: string, password: string) : boolean {

    if(! this.authService.login(username,password) ){
      this.message = "incorrect username or password";
    }
    return false;
  }

  logout() : boolean {
    return this.authService.logout();
  }

}

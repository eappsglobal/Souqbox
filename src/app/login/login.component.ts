import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
login: any;

 constructor(private config: ConfigService) { }

 ngOnInit() {
   this.login = this.getLogin();
 }
 getLogin() {

return this.config.getConfig().login

 }
}

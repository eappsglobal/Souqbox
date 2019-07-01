import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signup: any;



 constructor(private config: ConfigService) { }

 ngOnInit() {
   this.signup = this.getSignup();

 }
 getSignup() {
 return this.config.getConfig().signup;
}

}

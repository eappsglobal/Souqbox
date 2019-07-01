import { Component, OnInit } from '@angular/core';
 import { ConfigService } from '../config.service';
import {ContactFormEmailService} from "./contact-form-email.service";
import { Router } from '@angular/router';

@Component({
 selector: 'app-contact',
 templateUrl: './contact.component.html',
 styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 contactinfo: any;
 isMailAlert= false;
 isMailAlertFailed= false;
 constructor( private config : ConfigService,private router: Router, private service: ContactFormEmailService) { }

 ngOnInit() {
   this.contactinfo = this.getContact();
 }
getContact() {
 return this.config.getConfig().contactinfo;
}

mailNotification(contact:HTMLFormElement){
  console.log(contact);
   this.service.sendEmail(contact).subscribe(data=> {
     let res:any = data;
     console.log('User:'+contact.name+' is successfully register and mail has been sent and the message id is'+ res.messageId);
     this.isMailAlert=true;
    },err => {
      this.isMailAlertFailed=true;
      console.log("Response to Mail Request Failed");
      console.log(err);
    });
   setTimeout(() => {
    this.router.navigate(['../About/']);
 }, 10000);
}

}

import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
 selector: 'app-enterprise',
 templateUrl: './enterprise.component.html',
 styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
enterprise: any;
 constructor(private config: ConfigService) { }

 ngOnInit() {
   this.enterprise = this.getEnterprise();
 }
getEnterprise() {
 return this.config.getConfig().enterprise;
}
}

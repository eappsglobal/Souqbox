import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
 selector: 'app-riskpal',
 templateUrl: './riskpal.component.html',
 styleUrls: ['./riskpal.component.css']
})
export class RiskpalComponent implements OnInit {
 riskpal: any;
 constructor(private config: ConfigService) { }

 ngOnInit() {
   this.riskpal = this.getRiskpal();
 }
getRiskpal() {
 return this.config.getConfig().riskpal;
}
}

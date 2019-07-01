import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
 selector: 'app-its',
 templateUrl: './its.component.html',
 styleUrls: ['./its.component.css']
})
export class ItsComponent implements OnInit {
 its: any;

 constructor(private config: ConfigService) { }

 ngOnInit() {
   this.its = this.getIts();

 }
 getIts() {
 return this.config.getConfig().its;
}
}

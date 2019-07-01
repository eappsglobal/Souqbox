import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
 selector: 'app-nts',
 templateUrl: './nts.component.html',
 styleUrls: ['./nts.component.css']
})
export class NtsComponent implements OnInit {
nts: any;
 constructor(private config: ConfigService) { }

 ngOnInit() {
   this.nts = this.getNts();
 }
getNts() {
 return this.config.getConfig().nts;
}
}

import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-casestudies',
  templateUrl: './casestudies.component.html',
  styleUrls: ['./casestudies.component.css']
})
export class CasestudiesComponent implements OnInit {

  casestudies: any;


  constructor(private config: ConfigService) { }

  ngOnInit() {
  this.casestudies = this.getCasestudies();
  }

  getCasestudies() {
    return this.config.getConfig().casestudies;
  }

}

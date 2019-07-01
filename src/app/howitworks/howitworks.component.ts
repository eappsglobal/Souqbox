import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {

  howitwork: any;


  constructor(private config: ConfigService) { }

  ngOnInit() {
  this.howitwork = this.getHowitwork();
  // Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = 'block';
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

  }

  getHowitwork() {
    return this.config.getConfig().howitwork;
  }
}

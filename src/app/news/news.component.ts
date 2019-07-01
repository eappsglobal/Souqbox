import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any;


  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.news = this.getNews();
  }
  getNews() {
    return this.config.getConfig().news;
  }
}

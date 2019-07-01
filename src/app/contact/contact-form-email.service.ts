import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ContactFormEmailService {

  constructor(private http: HttpClient) { }
  private url = "http://3.9.156.222:3000/sendmail";

  sendEmail(data) {
    console.log("mail invoked");
    return this.http.post(this.url, data);
  }
}

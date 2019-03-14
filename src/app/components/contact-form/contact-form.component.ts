import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(formContact) {
    console.log(formContact);
    const formValue = formContact.value;
    const url = 'http://localhost:3000/';
    const body = JSON.stringify(formValue);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post(url, body, httpOptions)
      .toPromise()
      .then(res => console.log(res));
  }
}

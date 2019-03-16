import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name = '';
  email = '';
  subject = '';
  message = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(formContact) {
    // console.log(formContact);
    const formValue = formContact.value;
    const url = '/';
    const body = JSON.stringify(formValue);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(url, body, httpOptions)
     .toPromise()
     .then(res => alert('Thank you for contacting me! I will get back to you soon.')); // To learn about promise later.
    // clear the form after submission
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.subject = '';
  }

}

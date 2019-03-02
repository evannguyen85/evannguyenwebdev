import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() clickMenu: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  moveToSection(e) {
    if (e.target.id !== 'cover-letter') {
      e.preventDefault();
      console.log(e);
      this.clickMenu.emit(e.target.id);
    }
  }
}

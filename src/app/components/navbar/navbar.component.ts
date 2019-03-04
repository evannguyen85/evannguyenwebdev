import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() clickMenuItem: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  moveToSection(e) {
    if (e.target.id !== 'cover-letter') {
      e.preventDefault();
      this.clickMenuItem.emit(e);
      // console.log(e);
    }
  }

  // goHome(e) {
  //   e.preventDefault();
  //   console.log(e);
  // }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() clickMenuItem: EventEmitter<any> = new EventEmitter();
  menuItems = ['INTRODUCTION', 'GALLERY', 'TECHS', 'ABOUT ME', 'CONTACT'];
  constructor() { }

  ngOnInit() {
  }

  getClass(menu) {
    return {
      'intro': menu === 'INTRODUCTION',
      'gallery': menu === 'GALLERY',
      'techs': menu === 'TECHS',
      'about': menu === 'ABOUT ME',
      'contact': menu === 'CONTACT'
    };
  }

  onClickMenuItem(e) {
    e.preventDefault();
    this.clickMenuItem.emit(e);
    // console.log(e);
    // console.log(e.path[3]);
    e.path[3].classList.remove('in');
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() clickViewWork: EventEmitter<any> = new EventEmitter();
  isOnMouseEnter = false;
  constructor() { }

  ngOnInit() {
  }

  onViewWork(e) {
    this.clickViewWork.emit(e);
  }

}

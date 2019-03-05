import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewWorkDirective } from '../../directives/view-work/view-work.directive';

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

  onMouseEnter() {
    this.isOnMouseEnter = true;
    console.log(this.isOnMouseEnter);
  }

  onMouseLeave() {
    this.isOnMouseEnter = false;
    console.log(this.isOnMouseEnter);
  }

}

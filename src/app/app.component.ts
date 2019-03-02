import { Component, ViewChildren, QueryList } from '@angular/core';
import { NavigationDirective } from './directives/navigation/navigation.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evannguyenwebdev';
  @ViewChildren(NavigationDirective) appNav: QueryList<NavigationDirective>;

  navigateToSection() {
    this.appNav.toArray()[0].navigateToSection();
  }

  moveToSection(e) {
    const id = e;
    console.log(this.appNav.toArray());
    switch (id) {
      case 'intro':
        this.appNav.toArray()[0].navigateToSection();
        break;
      case 'gallery':
        this.appNav.toArray()[1].navigateToSection();
        break;
      case 'techs':
        this.appNav.toArray()[2].navigateToSection();
        break;
      case 'about':
        this.appNav.toArray()[3].navigateToSection();
        break;
      case 'contact':
        this.appNav.toArray()[4].navigateToSection();
        break;
      default:
        break;
    }
  }
}

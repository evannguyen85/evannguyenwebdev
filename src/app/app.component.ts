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

  navigateToIntro(e) {
    console.log(this.appNav.toArray()[1].el.nativeElement.firstChild.clientHeight);
    // hardcode nav-height = 50 for now. will find a way to get navHeight
    // when click on Viewwork button. may consider navbar component inside home.
    const navHeight = this.appNav.toArray()[1].el.nativeElement.firstChild.clientHeight;
    this.appNav.toArray()[2].navigateToSection(navHeight);
  }

  goToSection(e) {
    // console.log(this.appNav.toArray()[0]);
    // e: navbar.
    const id = e.target.id;
    switch (id) {
      case 'home':
        this.appNav.toArray()[0].navigateToSection(e);
        break;
      case 'intro':
        this.appNav.toArray()[2].navigateToSection(e);
        break;
      case 'gallery':
        this.appNav.toArray()[3].navigateToSection(e);
        break;
      case 'techs':
        this.appNav.toArray()[4].navigateToSection(e);
        break;
      case 'about':
        this.appNav.toArray()[5].navigateToSection(e);
        break;
      case 'contact':
        this.appNav.toArray()[6].navigateToSection(e);
        break;
      default:
        break;
    }
  }
}

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
    // console.log(this.appNav.toArray()[1].el.nativeElement.firstChild.clientHeight);
    // hardcode nav-height = 50 for now. will find a way to get navHeight
    // when click on Viewwork button. may consider navbar component inside home.
    const navbar = this.appNav.toArray()[1].el.nativeElement.firstChild;
    const navHeight = navbar.clientHeight;
    this.appNav.toArray()[2].navigateToSection(navHeight);
  }

  goToSection(e) {
    // e: li
    const navbar = this.appNav.toArray()[1].el.nativeElement.firstChild;
    // console.log(navbar);
    const uls = navbar.firstChild.childNodes[1].childNodes;
    // console.log(uls);
    uls.forEach(ul => {
      const lis = ul.childNodes;
      // console.log(lis);
      lis.forEach(li => {
        li.className = '';
      });
    });
    // console.log(this.appNav.toArray()[1].el);
    const id = e.target.id;
    switch (id) {
      case 'home':
        this.appNav.toArray()[0].navigateToSection(e);
        navbar.classList.remove('sticky');
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

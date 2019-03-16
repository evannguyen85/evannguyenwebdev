import { Component, ViewChildren, QueryList, HostListener } from '@angular/core';
import { NavigationDirective } from './directives/navigation/navigation.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evannguyenwebdev';
  @ViewChildren(NavigationDirective) appNav: QueryList<NavigationDirective>;
  // catch window scroll event.
  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    // console.log('scrolling...');
    const navbar = this.appNav.toArray()[1].el.nativeElement;
    const navHeight = navbar.firstChild.offsetHeight;
    const sticky = navbar.offsetTop;

    // sticky navbar when it reaches the top
    if (window.scrollY >= sticky) {
      navbar.firstChild.classList.add('sticky');
    } else {
      navbar.firstChild.classList.remove('sticky');
    }
    const appNavArray = this.appNav.toArray();
    for (let i = 2; i < appNavArray.length; i++) {
      const section = appNavArray[i].el.nativeElement;
      const top = section.offsetTop - navHeight;
      const bottom = top + section.firstChild.offsetHeight;
      if (top <= window.scrollY && window.scrollY <= bottom) {
        // e: li
        const nav = this.appNav.toArray()[1].el.nativeElement.firstChild;
        const lis = document.querySelectorAll('nav div ul li');
        [].forEach.call(lis, function(li) {
          li.classList.remove('active');
        });
        const activeSectionId = section.firstChild.id;
        document.querySelector('.' + activeSectionId).parentElement.classList.add('active');
      }
    }
  }

  navigateToIntro(e) {
    const navbar = this.appNav.toArray()[1].el.nativeElement.firstChild;
    const navHeight = navbar.clientHeight;
    this.appNav.toArray()[2].navigateToSection(navHeight);
  }

  goToSection(e) {
    // e: li
    const navbar = this.appNav.toArray()[1].el.nativeElement.firstChild;
    const uls = navbar.firstChild.childNodes[1].childNodes;
    const className = e.target.className;
    const lis = document.querySelectorAll('nav div ul li');
    [].forEach.call(lis, function(li) {
      li.classList.remove('active');
    });
    // console.log(className);
    switch (className) {
      case 'navbar-brand':
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

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

  // catch window scroll event. to be improved:
  // using directive questions/44764592/angular-4-hostlistener-window-scroll-event-strangely-does-not-work-in-firefox
  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    // console.log('scrolling...');
    const navbar = this.appNav.toArray()[1].el.nativeElement;
    const navHeight = navbar.clientHeight;
    const sticky = navbar.offsetTop;
    // sticky navbar when it reaches the top
    if (window.scrollY >= sticky) {
      navbar.firstChild.classList.add('sticky');
    } else {
      navbar.firstChild.classList.remove('sticky');
    }

    // const intro = this.appNav.toArray()[2].el.nativeElement;
    // const top = intro.offsetTop;
    // const bottom = intro.offsetTop + intro.firstChild.clientHeight;
    // if (top <= window.scrollY && window.scrollY <= bottom) {
    //   console.log('section is reaching...');
    //   document.getElementById('intro').parentElement.classList.add('active');
    // }


    const appNavArray = this.appNav.toArray();
    for (let i = 2; i < appNavArray.length; i++) {
      // console.log(appNavArray[i]);
      const section = appNavArray[i].el.nativeElement;
      const top = section.offsetTop - navHeight;
      const bottom = top + section.firstChild.clientHeight;
      if (top <= window.scrollY && window.scrollY <= bottom) {
        // console.log(i + ' section is reaching...');
        // console.log(window.scrollY);
        // console.log(top);
        // console.log(section.firstChild.clientHeight);
        console.log(section.firstChild.id);
        const sectionId = section.firstChild.id; //duplicate id with lis. not good.
        document.getElementById(sectionId).parentElement.classList.add('active');
      }
    }

  }

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

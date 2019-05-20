import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  dialogResult = '';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialogForCalculator() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75%',
      data: {
        title: 'CALCULATOR',
        subtitle: 'Responsive calculator',
        avatar: '../../../assets/images/calc-icon.png',
        imgSource: '../../../assets/images/calculator.png',
        desc:  `A responsive calculator to peform basic and scientific calculations.
                The GUI is created using html, css and bootstrap, while functions to handle calculation logics are written in JavaScript.
                The calculator supports two modes: basic (small screen) and scientific (large screen).
                The app runs on Heroku so it may take several seconds to start up initially. `,
        techs: [
          {
            name: 'HTML',
            logo: '../../../assets/images/logos/html.png'
          },
          {
            name: 'CSS',
            logo: '../../../assets/images/logos/css.png'
          },
          {
            name: 'JavaScript',
            logo: '../../../assets/images/logos/javascript.png'
          },
          {
            name: 'BootStrap',
            logo: '../../../assets/images/logos/bootstrap.png'
          }
        ],
        links: {
          site: 'https://boiling-brook-33207.herokuapp.com/',
          git: 'https://github.com/evannguyen85/MyCalculator'
        }
      }
    });

    // Returned which action user has taken on the dialog
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    });
  }
  openDialogForDashboard() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '85%',
      data: {
        title: 'TESTER PERFORMANCE DASHBOARD',
        subtitle: 'Real-time tester monitoring',
        avatar: '../../../assets/images/dashboard-icon.png',
        imgSource: '../../../assets/images/dashboard.png',
        desc:  `Tester performance dashboard is a web-based application that extracts information about manufacturing
                testers' status (UP or DOWN) from machine logs and visualizes into charts on real time.
                This helps users (technicians, engineers or supervisors) to monitor the performance
                of testers on production floor and gives the users useful signals to make data-driven decisions
                for preventive maintenance. The app is hosted on Heroku and connected to MLab,
                so it might take several time to setup initially`,
        techs: [
          {
            name: 'MongoDB',
            logo: '../../../assets/images/logos/mongodb.png'
          },
          {
            name: 'NodeJS',
            logo: '../../../assets/images/logos/node.js.png'
          },
          {
            name: 'Express',
            logo: '../../../assets/images/logos/express.png'
          },
          {
            name: 'Highcharts',
            logo: '../../../assets/images/logos/highcharts.png'
          }
        ],
        links: {
          site: 'https://radiant-falls-42383.herokuapp.com/hhv001',
          git: 'https://github.com/evannguyen85/testerdashboard'
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    });
  }

  openDialogForPortfolio() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75%',
      data: {
        title: `EVAN'S PORTFOLIO PAGE`,
        subtitle: 'Showing my bio and projects',
        avatar: '../../../assets/images/portfolio.png',
        imgSource: '../../../assets/images/portfolio.png',
        desc:  `This is my portfolio page to introduce myself, show my completed projects, and hope to get in touch
                with the viewers. I wrote this page using angular 7 and angular material. I will continue to improve the UI,
                add backend services, and update new contents as I grow within the software development field.
                I am temporarily hosting it on GitHub and plan to buy a domain in the near future.`,
        techs: [
          {
            name: 'HTML',
            logo: '../../../assets/images/logos/html.png'
          },
          {
            name: 'CSS',
            logo: '../../../assets/images/logos/css.png'
          },
          {
            name: 'JavaScript',
            logo: '../../../assets/images/logos/javascript.png'
          },
          {
            name: 'BootStrap',
            logo: '../../../assets/images/logos/bootstrap.png'
          }
        ],
        links: {
          site: 'https://afternoon-oasis-26466.herokuapp.com/',
          git: 'https://github.com/evannguyen85/evannguyenwebdev'
        }
      }
    });

    // Returned which action user has taken on the dialog
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    });
  }

  openDialogForStore() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75%',
      data: {
        title: 'MENS\' WEAR STORE',
        subtitle: 'One stop for everything',
        avatar: '../../../assets/images/store-logo.jpeg',
        imgSource: '../../../assets/images/store.png',
        desc:  `A responsive online fashion shop for men (UI only). I created this website to practice using new features in bootstrap 4
                The GUI is created using html, css and bootstrap, while functions to handle calculation logics are written in JavaScript.
                and adding admin dashboard by chart.js library. I also took this advantage to practice responsive navigation and css
                animations. The website is hosted on heroku.`,
        techs: [
          {
            name: 'HTML',
            logo: '../../../assets/images/logos/html.png'
          },
          {
            name: 'CSS',
            logo: '../../../assets/images/logos/css.png'
          },
          {
            name: 'JavaScript',
            logo: '../../../assets/images/logos/javascript.png'
          },
          {
            name: 'BootStrap 4',
            logo: '../../../assets/images/logos/bootstrap.png'
          },
          {
            name: 'Chart.js',
            logo: '../../../assets/images/logos/chartjs-logo.svg'
          }
        ],
        links: {
          site: 'https://thawing-meadow-63820.herokuapp.com/',
          git: 'https://github.com/evannguyen85/menswearstore'
        }
      }
    });

    // Returned which action user has taken on the dialog
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    });
  }

  openDialogForPatatap() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75%',
      data: {
        title: 'PATATAP CIRCLES',
        subtitle: 'Visual sound kit application',
        avatar: '../../../assets/images/patatap.png',
        imgSource: '../../../assets/images/patatap.png',
        desc:  `Patatap is a visual sound kit application with animations by computer programmer Jono Brandel
                and Japanese electronic duo Lullatone, consisting of Shawn James Seymour and Yoshimi Tomida.
                https://patatap.com/. There was an exercise in one of my web development courses on Udemy to create
                something similar. Under the instruction of the teacher, I built patatap circles to practice paperjs and howlerjs
                libraries. Since it's fun, I plan to base on this to create something different in the near future.`,
        techs: [
          {
            name: 'HTML',
            logo: '../../../assets/images/logos/html.png'
          },
          {
            name: 'CSS',
            logo: '../../../assets/images/logos/css.png'
          },
          {
            name: 'Paper.js',
            logo: '../../../assets/images/logos/paperjs.png'
          },
          {
            name: 'howler.js',
            logo: '../../../assets/images/logos/howlerjs.png'
          },
        ],
        links: {
          site: 'https://serene-bastion-67445.herokuapp.com/',
          git: 'https://github.com/evannguyen85/patatap'
        }
      }
    });

    // Returned which action user has taken on the dialog
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    });
  }
}

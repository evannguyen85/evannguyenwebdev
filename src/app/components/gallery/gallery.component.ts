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

  openDialogForDashboard() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '85%',
      data: {
        title: 'TESTER PERFORMANCE DASHBOARD',
        subtitle: 'Real-time tester monitoring',
        avatar: '../../../assets/images/dashboard-icon.png',
        imgSource: '../../../assets/images/dashboard.png',
        desc:  `Tester performance dashboard to show how tester performs.`,
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
          site: 'https://boiling-brook-33207.herokuapp.com/',
          git: 'https://github.com/evannguyen85/MyCalculator'
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    });
  }

  openDialogForCalculator() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '85%',
      data: {
        title: 'CALCULATOR',
        subtitle: 'Responsive calculator',
        avatar: '../../../assets/images/calc-icon.png',
        imgSource: '../../../assets/images/calculator.png',
        desc:  `A calculator to peform basic and scientific calculations.
                This is built using html, css, javascript and bootstrap.
                The app runs on Heroku so it may take several seconds to start up initially.`,
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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    });
  }

}

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

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '85%',
      // height: '80%',
      data: 'This is passed into the dialog. Hardcoded for now! To be changed depending on project'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    });
  }

}

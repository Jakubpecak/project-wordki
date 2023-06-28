import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/components/shared/popup/popup.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  title: string = 'Select category of quiz!';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(): void {
    this.dialog.open(PopupComponent, {
      disableClose: true,
      data: {title: this.title, isLoginIn: false, isRegistration: false}
  })}
  
}

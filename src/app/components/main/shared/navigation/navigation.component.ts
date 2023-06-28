import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/components/shared/popup/popup.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isMobile: boolean = false;
  showFiller = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  openDialog(title?: string, isLoginIn?: boolean, isRegistration?: boolean): void {
    this.dialog.open(PopupComponent, {
      disableClose: true,
      data: {title: title, isLoginIn: isLoginIn, isRegistration: isRegistration}
  })}

}

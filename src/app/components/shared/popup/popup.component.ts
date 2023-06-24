import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  list: string[] = ['Geography', 'Math', 'Traveling'];
  title: string = '';

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }) { }

  ngOnInit(): void {
    const { title } = this.data;
    this.title = title;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

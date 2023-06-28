import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  list: string[] = ['Geography', 'Math', 'Traveling'];
  title: string = '';
  isLoginIn: boolean = false;
  isRegistration: boolean = false;
  form!: UntypedFormGroup;

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, isLoginIn: boolean, isRegistration: boolean }, private fb: FormBuilder) { }

  ngOnInit(): void {
    const { title, isLoginIn, isRegistration } = this.data;
    this.title = title;
    this.isLoginIn = isLoginIn;
    this.isRegistration = isRegistration;

    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('test')
  }

}

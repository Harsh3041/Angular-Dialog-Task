import { FormGroup, FormControl } from '@angular/forms';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Properties used in Data Binding
  input1:any;
  newinput1:any;
  input2:any;
  newinput2:any;
  input3:any;
  newinput3:any;
  isShown: boolean = false ;
  myForm: FormGroup;
  title = 'angular-material-dialog-app';


  // Code for Displaying Dialog Box
  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  constructor(public dialog: MatDialog) {
    this.myForm = new FormGroup({
      acc: new FormControl(''),

    })
   }


  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, {  });
    myTempDialog.afterClosed().subscribe((res) => {
    });
  }

  closeTempDialog(){
    this.dialog.closeAll();
  }

  // Property helping in hiding and showing Accordion
  // hidden by default


  // Method helping in toggling the div in which Accordion is stored
  toggleShow() {
    if(this.input1.value == ''){
      this.isShown = false;
    }
    else if(this.input2.value != '' && this.input3.value != ''){
      this.isShown = true;
    }
    else{
      this.isShown =true;
    }
   }

  // Method which handles the change of property value on Binding
  getChange(){
   this.newinput1 = this.input1;
   this.newinput2 = this.input2;
   this.newinput3 = this.input3;
  }

}

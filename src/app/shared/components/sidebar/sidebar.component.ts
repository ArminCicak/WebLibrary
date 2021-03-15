import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PostavkeComponent } from 'src/app/modules/postavke/postavke.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }


  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = " ";
    dialogConfig.height = "auto";
    dialogConfig.width = "auto";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(PostavkeComponent, dialogConfig);
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { PostavkeComponent } from 'src/app/modules/postavke/postavke.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { DashboardMaterialComponent } from 'src/app/modules/dashboard-material/dashboard-material.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toogleSideBarForMe: EventEmitter<any> = new EventEmitter();


  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void { }

  toogleSideBar () {
this.toogleSideBarForMe.emit();
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

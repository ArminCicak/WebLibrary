import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PostavkeComponent } from 'src/app/modules/postavke/postavke.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public matDialog: MatDialog) { }

 openModal(component: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.id = " ";
    dialogConfig.height = "auto";
    dialogConfig.width = "auto";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(component, dialogConfig);
  }

}

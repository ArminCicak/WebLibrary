import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from '../../modules/book/book.component';
import { SharedModule } from 'src/app/shared.module';
import { AngularMaterialModule } from '../../angular-material.module';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularMaterialModule,

  ]
})
export class DefaultModule { }

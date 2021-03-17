import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { BookComponent } from '../../modules/book/book.component';
import { SharedModule } from 'src/app/shared.module';
import { AngularMaterialModule } from '../../angular-material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DefaultComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularMaterialModule,
    MatPaginatorModule,
    MatTableModule,
  ]
})
export class DefaultModule { }

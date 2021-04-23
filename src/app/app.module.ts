import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultModule } from './layouts/default/default.module';
import { RouterModule } from '@angular/router';
import { PostavkeComponent } from './modules/postavke/postavke.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardMaterialComponent } from './modules/dashboard-material/dashboard-material.component';
import { CardComponent } from './components/card/card.component';
import { ChartsModule } from 'ng2-charts';
import { MjesecniNajamKnjigaComponent } from './components/charts/mjesecni-najam-knjiga/mjesecni-najam-knjiga.component';
import { GodisnjiNajamKnjigaComponent } from './components/charts/godisnji-najam-knjiga/godisnji-najam-knjiga.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RentedBooksComponent } from './modules/rented-books/rented-books.component';
import { DashboardExpandComponent } from './modules/dashboard-expand/dashboard-expand.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    ResetComponent,
    NavbarComponent,
    PostavkeComponent,
    DashboardMaterialComponent,
    CardComponent,
    MjesecniNajamKnjigaComponent,
    GodisnjiNajamKnjigaComponent,
    RentedBooksComponent,
    DashboardExpandComponent,
    MiniCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DefaultModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ChartsModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

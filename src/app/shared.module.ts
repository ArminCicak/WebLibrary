import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';





@NgModule({
  declarations: [
HeaderComponent,
FooterComponent,
SidebarComponent

  ],
  imports: [
   CommonModule,
   AngularMaterialModule,
   FlexLayoutModule,
   RouterModule,
   MatListModule,
   MatMenuModule
  ],
exports:[
  HeaderComponent,
  FooterComponent,
  SidebarComponent
]
})
export class SharedModule { }

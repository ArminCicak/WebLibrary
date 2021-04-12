import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DefaultComponent } from './layouts/default/default.component';
import { BookComponent } from 'src/app/modules/book/book.component';
import { PostavkeComponent } from './modules/postavke/postavke.component';
import { DashboardMaterialComponent } from './modules/dashboard-material/dashboard-material.component';
import { RentedBooksComponent } from './modules/rented-books/rented-books.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'default',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardMaterialComponent
      },
      {
        path: 'book',
        component: BookComponent
      },
      {
        path: 'postavke',
        component: PostavkeComponent
      },
      {
        path: 'rented-books',
        component: RentedBooksComponent
      }

    ]},
  { path: 'reset', component: ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

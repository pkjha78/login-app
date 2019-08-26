import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Add New Components **/
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModifyComponent } from './modify/modify.component';


const routes: Routes = [
  /** Add the route path for menu */
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'modify', component: ModifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

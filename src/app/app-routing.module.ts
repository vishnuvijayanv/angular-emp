import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { EditusersComponent } from './editusers/editusers.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'dashboard' ,component:DashboardComponent
  },
  {
    path:'employees' ,component:UsersComponent
  },
  {
    path:'employee/add' ,component:AddusersComponent
  },
  {
    path:'employee/edit/:id' , component:EditusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

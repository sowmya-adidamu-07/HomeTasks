import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';


const routes: Routes = [
  {
    path:'active',
    component:UsersListComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivatedRoutingModule { }

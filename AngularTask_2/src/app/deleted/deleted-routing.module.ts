import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component'

const routes: Routes = [
  {
    path:"deleted",
    component: UsersListComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletedRoutingModule { }

 import { Routes, RouterModule } from '@angular/router';
 import { NgModule } from '@angular/core';


import { UsersGroupsComponent } from './users-groups/users-groups.component';

 const routes: Routes = [
   { path: 'UserGroups', component:UsersGroupsComponent},
   { path:'**', component:UsersGroupsComponent}
 ];

 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class ConfigRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGroupsComponent } from './users-groups/users-groups.component';
import { ConfigRoutingModule } from './config.routes';



@NgModule({
  declarations: [
    UsersGroupsComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }

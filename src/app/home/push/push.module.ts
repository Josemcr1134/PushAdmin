import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPushMessageComponent } from './new-push-message/new-push-message.component';
import { PushHistorialComponent } from './push-historial/push-historial.component';
import { PushReportsComponent } from './push-reports/push-reports.component';
import { PushRoutingModule } from './push.routes';



@NgModule({
  declarations: [
    NewPushMessageComponent,
    PushHistorialComponent,
    PushReportsComponent
  ],
  imports: [
    CommonModule,
    PushRoutingModule
  ]
})
export class PushModule { }

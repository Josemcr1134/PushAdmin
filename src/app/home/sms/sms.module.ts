import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSmsComponent } from './new-sms/new-sms.component';
import { SmsHistorialComponent } from './sms-historial/sms-historial.component';
import { SmsReportsComponent } from './sms-reports/sms-reports.component';
import { SMSRoutingModule } from './sms.routes';



@NgModule({
  declarations: [
    NewSmsComponent,
    SmsHistorialComponent,
    SmsReportsComponent
  ],
  imports: [
    CommonModule,
    SMSRoutingModule
  ]
})
export class SMSModule { }

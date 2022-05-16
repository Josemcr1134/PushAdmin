import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmailComponent } from './new-email/new-email.component';
import { EmailHistorialComponent } from './email-historial/email-historial.component';
import { EmailReportsComponent } from './email-reports/email-reports.component';
import { EmailRoutingModule } from './email.routes';



@NgModule({
  declarations: [
    NewEmailComponent,
    EmailHistorialComponent,
    EmailReportsComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule
  ]
})
export class EmailModule { }

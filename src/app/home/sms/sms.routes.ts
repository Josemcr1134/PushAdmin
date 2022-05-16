import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewSmsComponent } from './new-sms/new-sms.component';
import { SmsHistorialComponent } from './sms-historial/sms-historial.component';
import { SmsReportsComponent } from './sms-reports/sms-reports.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {path:'NewSMS', component:NewSmsComponent},
      {path:'SMSHistorial', component:SmsHistorialComponent},
      {path:'SMSReports', component:SmsReportsComponent},
      {path:'**', redirectTo:'NewSMS'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SMSRoutingModule {}

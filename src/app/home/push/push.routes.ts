import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewPushMessageComponent } from './new-push-message/new-push-message.component';
import { PushHistorialComponent } from './push-historial/push-historial.component';
import { PushReportsComponent } from './push-reports/push-reports.component';


const routes: Routes = [
  {
  path: '',
  children:[
      {path:'NewPushMessage', component:NewPushMessageComponent},
      {path:'PushHistorial', component:PushHistorialComponent},
      {path:'PushReport', component:PushReportsComponent},
      {path:'**', redirectTo:'NewPushMessage'},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PushRoutingModule {}

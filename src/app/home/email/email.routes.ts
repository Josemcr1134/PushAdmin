import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewEmailComponent } from './new-email/new-email.component';
import { EmailHistorialComponent } from './email-historial/email-historial.component';
import { EmailReportsComponent } from './email-reports/email-reports.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {path:'NewEmail', component:NewEmailComponent},
      {path:'EmailHistorial', component:EmailHistorialComponent},
      {path:'EmailReports', component:EmailReportsComponent},
    ]
  },


  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule {}

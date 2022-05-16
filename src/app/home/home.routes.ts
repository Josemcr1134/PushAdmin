import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PushModule } from './push/push.module';
import { HomeComponent } from './home.component';


const routes: Routes = [

  {path:'',
   component:HomeComponent,
   children:[
    {
      path:'Email',
      loadChildren:() => import('./email/email.module').then(m => m.EmailModule)
    },{
      path: "Push",
      loadChildren:() =>  import('./push/push.module').then(m => m.PushModule)
    },{
      path: 'Sms',
      loadChildren:() => import('./sms/sms.module').then(m => m.SMSModule)
    },
    {
      path: '**', redirectTo: 'Push'
    }
   ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

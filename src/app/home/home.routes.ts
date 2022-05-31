import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ConfigModule } from './config/config.module';


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
    },{
      path: 'Config',
      loadChildren:() => import('./config/config.module').then(m => m.ConfigModule)
    }, {
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

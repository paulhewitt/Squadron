import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { TipsComponent } from './tips/tips.component';
import { PhoneComponent } from './phone/phone.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
  },
  {
    path: 'demo', component: DemoComponent,
  },
  {
    path: 'tips', component: TipsComponent,
  },
  {
    path: 'phone', component: PhoneComponent,
  },
  {
    path: 'admin', component: AdminComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

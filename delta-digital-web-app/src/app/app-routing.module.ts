import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'channels',
    loadChildren: () => import('./modules/channels/channels.module').then(m => m.ChannelsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PackageComponent } from './components/package/package.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TermsComponent } from './components/terms/terms.component';
import { AuthGuard } from './core/services/auth.guard';
import { ChannelComponent } from './modules/channels/channel/channel.component';
import { GalleryComponent } from './modules/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'package', component: PackageComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'channel/:id', component: ChannelComponent },
  {
    path: 'channels',
    loadChildren: () => import('./modules/channels/channels.module').then(m => m.ChannelsModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./modules/questions/questions.module').then(m => m.QuestionsModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate:[AuthGuard]

  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { ConfigComponent } from './config/config.component';
import { DeviceComponent } from './device/device.component';
import { EmailChangeComponent } from './email-change/email-change.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfileMainConfigComponent } from './profile-main-config/profile-main-config.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
        path: 'main', component: ProfileMainConfigComponent,
        children: [{ path: 'device', component: DeviceComponent }]
      },
      {
        path: 'config', component: ConfigComponent,
        children: [
          { path: 'email', component: EmailChangeComponent },
          { path: 'password', component: PasswordChangeComponent },
          { path: 'info', component: PersonalInfoComponent }
        ]
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

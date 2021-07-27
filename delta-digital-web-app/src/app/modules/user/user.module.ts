import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderModule } from 'src/app/shell/header/header.module';
import { DeviceComponent } from './device/device.component';
import { ConfigComponent } from './config/config.component';
import { ProfileMainConfigComponent } from './profile-main-config/profile-main-config.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { EmailChangeComponent } from './email-change/email-change.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    UserComponent,
    DeviceComponent,
    ConfigComponent,
    ProfileMainConfigComponent,
    PersonalInfoComponent,
    PasswordChangeComponent,
    EmailChangeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HeaderModule,
    BsDatepickerModule.forRoot(),

  ]
})
export class UserModule { }

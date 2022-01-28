import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { HeaderModule } from 'src/app/shell/header/header.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent,

  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HeaderModule,
    ReactiveFormsModule

  ]
})
export class ContactModule { }

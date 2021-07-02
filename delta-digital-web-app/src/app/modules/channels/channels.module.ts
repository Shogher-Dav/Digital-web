import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../shell/header/header.module';

import { ChannelsListComponent } from './channels-list/channels-list.component';
import { ChannelsComponent } from './channels.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChannelsRoutingModule } from './channels-routing.module';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';



@NgModule({
  declarations: [
    ChannelsListComponent,
    ChannelsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ChannelsRoutingModule
  ],
  exports: [ChannelsListComponent]

})
export class ChannelsModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ChannelsModule } from './modules/channels/channels.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeaderModule } from './shell/header/header.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AboutUsModule } from './modules/about-us/about-us.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    HeaderModule,
    ChannelsModule,
    AboutUsModule,
    PopoverModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

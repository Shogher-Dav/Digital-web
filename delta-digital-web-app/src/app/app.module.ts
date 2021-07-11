import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


// Componnets
import { AppComponent } from './app.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RegistrationComponent } from './components/registration/registration.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { HeaderModule } from './shell/header/header.module';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { ContactModule } from './modules/contact/contact.module';

// ngx bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { QuestionsModule } from './modules/questions/questions.module';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './core/services/auth.interceptor';




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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    ChannelsModule,
    AboutUsModule,
    ContactModule,
    QuestionsModule,
    // AccordionModule.forRoot(),
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

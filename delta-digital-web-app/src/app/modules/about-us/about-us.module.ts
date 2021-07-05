import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { HeaderModule } from 'src/app/shell/header/header.module';
import { AboutUsRoutingModule } from './about-us-routing.module';




@NgModule({
  declarations: [
    AboutUsComponent

  ],
  imports: [
    CommonModule,
    HeaderModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }

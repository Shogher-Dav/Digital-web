import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { HeaderModule } from 'src/app/shell/header/header.module';
import {CarouselModule}  from 'ngx-bootstrap/carousel';




@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    HeaderModule,
    CarouselModule.forRoot()

  ]
})
export class GalleryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { HeaderModule } from 'src/app/shell/header/header.module';
import {CarouselModule}  from 'ngx-bootstrap/carousel';
import { TvShowComponent } from './tv-show/tv-show.component';
import { TvProgrammesComponent } from './tv-programmes/tv-programmes.component';
import { MoviesComponent } from './movies/movies.component';
import { ChildTvComponent } from './child-tv/child-tv.component';
import { TvMyListComponent } from './tv-my-list/tv-my-list.component';
import { PlayerComponent } from './player/player.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { SeriesComponent } from './player/series/series.component';
import { SimilarComponent } from './player/similar/similar.component';
import { AboutMovieComponent } from './player/about-movie/about-movie.component';




@NgModule({
  declarations: [
    GalleryComponent,
    TvShowComponent,
    TvProgrammesComponent,
    MoviesComponent,
    ChildTvComponent,
    TvMyListComponent,
    PlayerComponent,
    SeriesComponent,
    SimilarComponent,
    AboutMovieComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    HeaderModule,
    CarouselModule.forRoot(),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,

  ]
})
export class GalleryModule { }

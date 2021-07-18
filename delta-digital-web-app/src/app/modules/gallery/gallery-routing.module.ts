import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildTvComponent } from './child-tv/child-tv.component';
import { GalleryComponent } from './gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutMovieComponent } from './player/about-movie/about-movie.component';
import { PlayerComponent } from './player/player.component';
import { SeriesComponent } from './player/series/series.component';
import { SimilarComponent } from './player/similar/similar.component';
import { TvMyListComponent } from './tv-my-list/tv-my-list.component';
import { TvProgrammesComponent } from './tv-programmes/tv-programmes.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  {
    path: '', component: GalleryComponent,
    children: [
      { path: 'tvshow', component: TvShowComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'programmes', component: TvProgrammesComponent },
      { path: 'childtv', component: ChildTvComponent },
      { path: 'tvmylist', component: TvMyListComponent },

    ],
  },
  {
    path: 'player', component: PlayerComponent, 
    children: [
      { path: 'tvabout', component: AboutMovieComponent },
      { path: 'series', component: SeriesComponent },
      { path: 'similar', component: SimilarComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  selectedMovieTypeName = 'Սերիալներ';
  selectedTypeImg = '../../../assets/images/1257.png';
  isSelectedType = true;


  movies = [
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' }
  ];
  movieTypes = [
    { name: 'Սերիալներ', img: '../../../assets/images/1257.png' },
    { name: 'Ֆիլմեր', img: '../../../assets/images/1289.png' },
    { name: 'Հաղորդումներ', img: '../../../assets/images/1275.png' },
    { name: 'Մանկական', img: '../../../assets/images/1276.png' },
    { name: 'Իմ Ցանկը', img: '../../../assets/images/3404.png' },
  ];
  selectedTypeMovies = [
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },


  ]

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToPlayer(name: string) {
    this.route.navigate(['gallery/player/series']);
  }

}

import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true } }
  ]
})
export class GalleryComponent implements OnInit {

  movies = [
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' }
  ];
  movieTypes = [
    { name: 'Սերիալներ', img: '../../../assets/images/1257.png', url: 'tvshow' },
    { name: 'Ֆիլմեր', img: '../../../assets/images/1289.png', url: 'movies' },
    { name: 'Հաղորդումներ', img: '../../../assets/images/1275.png', url:'programmes' },
    { name: 'Մանկական', img: '../../../assets/images/1276.png', url: 'childtv' },
    { name: 'Իմ Ցանկը', img: '../../../assets/images/3404.png', url: 'tvmylist' },
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
  selectedMovieTypeName: string;
  selectedTypeImg: string;
  isSelectedType = false;


  constructor() { }

  ngOnInit(): void {
  }

  chooseMovieType(name: string, imgUrl: string) {
    this.selectedMovieTypeName = name;
    this.selectedTypeImg = imgUrl;
    this.isSelectedType = true;
  }

}

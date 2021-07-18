import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

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
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

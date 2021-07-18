import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {


  selectedTypeMovies = [
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },
    { name: 'Անվանումը', img: '../../../assets/images/component (1).png' },  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

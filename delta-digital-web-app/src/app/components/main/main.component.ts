import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // searchText = new FormControl('');

  isLoggedIn = true;



  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  searchOpen = false;
  searchText = new FormControl('');
  
  // temporary variable, need to be removed or changed
  isLoggedIn = true;
  constructor() { }

  ngOnInit(): void {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  toggleSearch(){
    this.searchOpen = !this.searchOpen;
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MainComponent } from 'src/app/components/main/main.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  searchOpen = false;
  searchText = new FormControl('');
  isLoggedIn = false;
  showLogin$ = this.mainService.showLogin$;

  constructor(private authService: AuthService,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.setIsAuthenticated();
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  toggleSearch(){
    this.searchOpen = !this.searchOpen;
    
  }

  setIsAuthenticated() {
    const isRemembered = this.authService.getIsRememberPaswordLocalStr();
    const isAuthLocal =  this.authService.getIsAuthenticatedLocalStr();
    const isAuthSession  = this.authService.getIsAuthenticatedSessionStr();
    
    if(isRemembered) {
      if(isAuthLocal) {
      this.isLoggedIn = JSON.parse(isAuthLocal);
      } 

    } else {
      if(isAuthSession) {
        this.isLoggedIn = JSON.parse(isAuthSession);
      }
    }
   
  }

}

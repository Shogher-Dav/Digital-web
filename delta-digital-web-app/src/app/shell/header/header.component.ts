import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MainComponent } from 'src/app/components/main/main.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MainService } from 'src/app/core/services/main.service';
import { ChannelsService } from 'src/app/core/services/channels.service'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IChannel } from 'src/app/core/interfaces/IChannel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('showState', [
      state('show', style({
        width: '170px'

        

      })),
      state('hide', style({
        width: '0'
      })),
      transition('show => hide', animate('600ms ease-in')),
      transition('hide => show', animate('400ms ease-out'))

    ])
  ]
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  searchOpen = false;
  searchTextGroup: FormGroup;
  isLoggedIn = false;
  showLogin$ = this.mainService.showLogin$;

  channels: IChannel[]


  constructor(
    private authService: AuthService,
    private mainService: MainService,
    private channelsService: ChannelsService,
    private fb: FormBuilder,
    private router: Router) { 
      this.searchTextGroup = this.fb.group({
        searchText: [null]
      });
    }

  ngOnInit(): void {
    this.setIsAuthenticated();
  }

  get stateName() {
    return this.searchOpen ? 'show' : 'hide'
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleSearch(event: any) {
    this.searchOpen = !this.searchOpen;
    this.channelsService.searchChannelsName('a').subscribe(res => {
      this.channels = res.content;
    });
    
    if(this.isLoggedIn){
      // this.channelsService.getChannels();
    }


  }

  setIsAuthenticated() {
    const isRemembered = this.authService.getIsRememberPaswordLocalStr();
    const isAuthLocal = this.authService.getIsAuthenticatedLocalStr();
    const isAuthSession = this.authService.getIsAuthenticatedSessionStr();

    if (isRemembered) {
      if (isAuthLocal) {
        this.isLoggedIn = JSON.parse(isAuthLocal);
      }

    } else {
      if (isAuthSession) {
        this.isLoggedIn = JSON.parse(isAuthSession);
      }
    }

  }

  onSelect(event: any){
    const channel = event.item;
    this.router.navigate(['channel', channel.id]);
  }

}

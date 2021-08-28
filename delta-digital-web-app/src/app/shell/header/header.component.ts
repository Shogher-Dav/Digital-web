import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MainComponent } from 'src/app/components/main/main.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MainService } from 'src/app/core/services/main.service';
import { ChannelsService } from 'src/app/core/services/channels.service'
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  searchText = new FormControl('');
  isLoggedIn = false;
  showLogin$ = this.mainService.showLogin$;
  @Output() public click: EventEmitter<MouseEvent> = new EventEmitter();

  channelNames: string[] = [];

  selected: string;


  constructor(
    private authService: AuthService,
    private mainService: MainService,
    private channelsService: ChannelsService) { }

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
      res.content.map(x => this.channelNames.push(x.name));
      console.log(res);
    });
    console.log(this.channelNames)
    if(this.isLoggedIn){
      // this.channelsService.getChannels();

    }

    console.log(this.searchText.value)

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

}

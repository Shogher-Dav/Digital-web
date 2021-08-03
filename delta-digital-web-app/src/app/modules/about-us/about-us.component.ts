import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IAbout } from 'src/app/core/interfaces/IAbout';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {

  about = new IAbout();
  subS: Subscription;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.showLogin$.next(true);
    this.subS = this.mainService.getAboutInfo().subscribe(res => {
      this.about = res;
    })

  }

  ngOnDestroy(): void {
    this.subS.unsubscribe();
  }


}

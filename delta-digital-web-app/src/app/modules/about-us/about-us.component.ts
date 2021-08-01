import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.showLogin$.next(true);

  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-main-config',
  templateUrl: './profile-main-config.component.html',
  styleUrls: ['./profile-main-config.component.scss']
})
export class ProfileMainConfigComponent implements OnInit {

  // isInDevice = false;
  @Output() isInDevice = new EventEmitter<string>();



  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  openDevice(bool: string) {
    // this.isInDevice =  !this.isInDevice;
    this.isInDevice.emit(bool);
  }

  openConfig() { 
    this.route.navigate(['profile/config'])

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeDevice() {
    // this.isInDevice = false;
    this.router.navigate(["profile/main"]);
  }

}

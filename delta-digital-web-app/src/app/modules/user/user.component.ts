import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isInDevice = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDevice(event: any) {
    this.isInDevice = event === 'true' ? true : false 
  }

 

}

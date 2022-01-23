import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isInDevice = false;
  currentUser: any;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser()
    .subscribe(res => {
      this.currentUser = res;
    });
  }

  openDevice(event: any) {
    this.isInDevice = event === 'true' ? true : false 
  }

 

}

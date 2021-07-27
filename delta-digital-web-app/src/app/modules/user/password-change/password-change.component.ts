import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {

  showPassword = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  showPasswordToogle() {
    this.showPassword = !this.showPassword;
  }

  close() {
    this.router.navigate(['profile/config'])

  }

}

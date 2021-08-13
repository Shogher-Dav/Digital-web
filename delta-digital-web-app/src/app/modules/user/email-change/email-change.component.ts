import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.scss']
})
export class EmailChangeComponent implements OnInit {

  email = new FormControl('', { validators: Validators.required });

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {}

  changeEmail() {

    this.userService.changeEmail(this.email.value).subscribe(res => {
      console.log(res);
    });

    console.log(this.email.value);

  }

  close() {
    this.router.navigate(['profile/config']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.scss']
})
export class EmailChangeComponent implements OnInit {

  emailGroup: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder) { 
      this.emailGroup = this.fb.group({
        email: ['', [ Validators.required, Validators.email ]]
      });
    }

  ngOnInit(): void {}

  changeEmail() {

    this.userService.changeEmail(this.emailGroup.value.email).subscribe(res => {
      console.log(res);
    });


  }

  close() {
    this.router.navigate(['profile/config']);
  }

}

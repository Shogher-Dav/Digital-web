import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})

export class PasswordChangeComponent implements OnInit, OnDestroy {

  showPassword = false;
  showNewPassword = false;
  changePasswordGroup: FormGroup;
  private unsubscribe$ = new Subject<void>();

  passwordValidationPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/])[A-Za-z-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]{8,}/

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder) {
    this.changePasswordGroup = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: [null]
    });

  }

  ngOnInit(): void {
    console.log(this.changePasswordGroup.valid)
  }


  showPasswordToogle() {
    this.showPassword = !this.showPassword;
  }

  showNewPasswordToogle() {
    this.showNewPassword = !this.showNewPassword;
  }

  changePassword() {
    if (this.changePasswordGroup.valid) {
      this.userService.changePassword(this.changePasswordGroup.value).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(res => {
        console.log(res);
      });
    }
  }

  close() {
    this.router.navigate(['profile/config']);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

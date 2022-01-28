import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageModalComponent } from 'src/app/core/modals/error-modal/message-modal.component';
import { AuthService } from 'src/app/core/services/auth.service';
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
  bsModalRef: BsModalRef;


  passwordValidationPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/])[A-Za-z-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]{8,}/

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private authService: AuthService,
    private route: Router
    ) {
    this.changePasswordGroup = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['']
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
      this.changePasswordGroup.controls['repeatPassword']
      .setValue(this.changePasswordGroup.controls['newPassword'].value);
      this.userService.changePassword(this.changePasswordGroup.value).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(
        res =>  {
          this.showYourModal('Գաղտնաբառը հաջողությամբ փոփոխվել է', 'success');
          this.exit();
        },
        err => this.showYourModal('Ներկայիս գաղտնաբառը սխալ է, խնդրում ենք փորձել կրկին', 'error'),
      );
    }
  }

  showYourModal(message:string, type: string) {
    const initialState = {
        message,
        type
    };
    this.bsModalRef = this.modalService.show(MessageModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
}

  close() {
    this.router.navigate(['profile/config']);
  }

  exit() {
    this.authService.removeIsAuthenticatedLocalStr();
    this.authService.removeTokenLocalStr();
    this.authService.removeRefreshTokenLocalStr();
    this.authService.removeIsRememberPasswordLocalStr();
    this.authService.removeTokenSessionStr();
    this.authService.removeRefreshTokenSessionStr();
    this.authService.removeIsAuthenticatedSessionStr();
    this.route.navigate(['']);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

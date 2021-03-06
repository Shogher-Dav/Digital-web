import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from 'src/app/core/modals/error-modal/message-modal.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MainService } from 'src/app/core/services/main.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // searchText = new FormControl('');
  isChecked = true;
  showPassword = false;

  isAuthenticated: any;
  loginForm: FormGroup;
  // Will used or change in the future
  passwordValidationPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/])[A-Za-z-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]{8,}/
  modalRef: any;
  successModalRef: any

  email = new FormControl('', [Validators.required, Validators.email]);

  bsModalRef: BsModalRef;


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private mainService: MainService,
    private modalService: BsModalService,
    private userService: UserService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit(): void {
    this.setIsAuthenticated();
    this.mainService.showLogin$.next(false);
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        res => {
          location.reload();
        },
        err => this.showYourModal('Էլեկտրոնային հասցեն կամ գաղտնաբառը սխալ են, խնդրում ենք փորձել կրկին', 'error'),
      );
    }
  }

  rememberPassword() {
    this.isChecked = !this.isChecked
    this.authService.saveIsRememberPasswordLocalStr(`${this.isChecked}`);
  }

  showPasswordToogle() {
    this.showPassword = !this.showPassword;
  }

  // getChannels() {
  //   this.authService.getChannels().subscribe();
  // }

  setIsAuthenticated() {
    const isRemembered = this.authService.getIsRememberPaswordLocalStr();
    const isAuthLocal = this.authService.getIsAuthenticatedLocalStr();
    const isAuthSession = this.authService.getIsAuthenticatedSessionStr();

    if (isRemembered) {
      this.isChecked = JSON.parse(isRemembered);
    }
    if (this.isChecked) {
      if (isAuthLocal) {
        this.isAuthenticated = JSON.parse(isAuthLocal);
      }

    } else {
      if (isAuthSession) {
        this.isAuthenticated = JSON.parse(isAuthSession);
      }
    }

  }

  openPackage(): void {
    this.router.navigateByUrl('/package');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  sendEmail(successModal: TemplateRef<any>) {

    if (this.email.valid) {
      this.userService.sendEmailForForgetPassword(this.email.value).subscribe(res => {
        this.successModalRef = this.modalService.show(successModal, { class: 'sucsses-modal modal-dialog-centered' });
        console.log(res);
      });
    }
    this.modalRef.hide();
    this.email.reset();

  }

  showYourModal(message: string, type: string) {
    const initialState = {
      message,
      type
    };
    this.bsModalRef = this.modalService.show(MessageModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

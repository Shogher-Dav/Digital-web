import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from 'src/app/core/modals/error-modal/message-modal.component';
import { MainService } from 'src/app/core/services/main.service';
import { UserService } from 'src/app/core/services/user.service';

class CustomValidators {

  static passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if ((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
      return null;
    } else {
      return { passwordsNotMatching: true };
    }
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  userFormGroup: FormGroup;
  // Maybe will used in future
  passwordValidationPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/])[A-Za-z-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]{8,}/;
  showLogin$ = this.mainService.showLogin$;
  bsModalRef: BsModalRef;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private mainService: MainService,
    private router: Router,
    private modalService: BsModalService,
    ) {


    this.userFormGroup = this.fb.group({
      id: [null],
      birthDate: [null, Validators.required],
      email: [null, Validators.required,],
      name: [null, [Validators.required, Validators.pattern('[-_a-zA-Z]*')]],
      phoneNumber: [null, Validators.required],
      surname: [null, [Validators.required, Validators.pattern('[-_a-zA-Z]*')]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required]
    }, {
      validators: CustomValidators.passwordsMatch
    })
  }


  ngOnInit(): void {
    this.mainService.showLogin$.next(true);

  }

  register() {
    if (this.userFormGroup.valid) {
      this.userService.registerUser(this.userFormGroup.value).subscribe(
      res => {
        this.showYourModal('Դուք հաջողությամբ գրանցվեցիք', 'success'),
        this.userFormGroup.reset();
        this.router.navigate(['']);    
        },
      err => this.showYourModal('Գրանցումը չի իրականացվել, խնդրում ենք փորձել կրկին', 'error'),

      );
    }
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

  // Shogher$1234
  // shogh.dav123@gmail.com



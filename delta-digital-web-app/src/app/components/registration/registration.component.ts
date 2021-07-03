import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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
  passwordValidationPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/])[A-Za-z-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]{8,}/

  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      id: [null],
      birthDate: [null, Validators.required],
      email: [null, Validators.required,],
      name: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      surname: [null, Validators.required],
      password: [null, [Validators.required, Validators.pattern(this.passwordValidationPattern)]],
      confirmPassword: [null, Validators.required]
    }, {
      validators: CustomValidators.passwordsMatch
    })
  }

  ngOnInit(): void {}

  checkValid() {
    console.log(this.userFormGroup.valid);  
  }

}

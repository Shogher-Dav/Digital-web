import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

class CustomValidators {

  static passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    console.log(password === confirmPassword);

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
  passwordValidationPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/])[A-Za-z-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]{8,}/;


  constructor(
    private fb: FormBuilder,
    private userService: UserService) {


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


  ngOnInit(): void { }

  register() {
    if (this.userFormGroup.valid) {
      this.userService.registerUser(this.userFormGroup.value).subscribe();
    }
  }


}

  // Shogher$1234
  // shogh.dav@gmail.com



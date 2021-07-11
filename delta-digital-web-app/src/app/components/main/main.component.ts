import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // searchText = new FormControl('');
  isChecked = false;
  showPassword = false;

  isAuthenticated: boolean;
  loginForm: FormGroup;
  passwordValidationPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/])[A-Za-z-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]{8,}/

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.passwordValidationPattern)]]
    });

  }

  ngOnInit(): void {
    const isRemembered = this.authService.getIsRememberPasword();
    if (isRemembered) {
      this.isChecked = JSON.parse(isRemembered);
    }
    const isAuthenticated = this.authService.getIsRememberPasword();
    if (isAuthenticated) {
      this.isAuthenticated = JSON.parse(isAuthenticated);
    }

  }

  login() {
    console.log(this.loginForm.valid);
    // if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe(res => {
      this.authService.setIsAuthenticated('true');
      this.router.navigate(['']);

    });
    // }

    // const userCredentials = {
    //   birthDate: null,
    //   email: 'name.surname@gmail.com',
    //   name: 'Name',
    //   password: 'helloH123',
    //   phoneNumber: '094789856',
    //   surname: 'Surname'

    // }

  }

  rememberPassword() {
    this.isChecked = !this.isChecked
    this.authService.setIsRememberPassword(`${this.isChecked}`);
  }

  showPasswordToogle() {
    this.showPassword = !this.showPassword;
  }

}

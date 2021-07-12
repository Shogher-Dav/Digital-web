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

  isAuthenticated: any;
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
    this.setIsAuthenticated();

  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(res => {
        location.reload();
      });
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

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  personalInfo: FormGroup;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService) {
      
    this.personalInfo = this.fb.group({
      userName: ['', Validators.required],
      surname: ['', Validators.required],
      birthDate: ['', Validators.required]
    });


  }
  ngOnInit(): void {

    this.userService.getCurrentUser()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(res => {
        this.personalInfo.patchValue({
          userName: res.name,
          birthDate: res.birthDate,
          surname: res.surname
        });
      });
  }

  close() {
    this.router.navigate(["profile/config"]);
  }

  updateCurrentUser() {
    this.userService.updateCurrentUserInfo(this.personalInfo.value)
    .pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res => {
      console.log(res);
    })

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}

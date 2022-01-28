import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser } from 'src/app/core/interfaces/IUser';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-main-config',
  templateUrl: './profile-main-config.component.html',
  styleUrls: ['./profile-main-config.component.scss']
})
export class ProfileMainConfigComponent implements OnInit, OnDestroy {

  // isInDevice = false;
  @Output() isInDevice = new EventEmitter<string>();
  currentUser: IUser;
  private unsubscribe$ = new Subject<void>();




  constructor(private route: Router,
    private userService: UserService,
    private authService: AuthService) { }


  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    })

  }
  openDevice(bool: string) {
    // this.isInDevice =  !this.isInDevice;
    this.isInDevice.emit(bool);
  }

  openConfig() {
    this.route.navigate(['profile/config'])

  }

  deleteCurrentUser() {
    this.userService.deletecurrentUser(this.currentUser.id)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

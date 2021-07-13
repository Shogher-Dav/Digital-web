import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let refreshToken: any;

    if (this.authService.getRefreshTokenLocalStr) {
      refreshToken = this.authService.getRefreshTokenLocalStr();

    } else {
      refreshToken = this.authService.getRefreshTokenSessionStr();
    }
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error

            if (error.status === 401) {
              if (error.error.error === 'invalid_token') {
                this.authService.refreshToken({ refresh_token: refreshToken })
                  .subscribe(() => {
                    location.reload();
                  });
              } else {
                window.alert('Wrong email or password');
                this.router.navigate(['']).then(_ => console.log('redirect to login'));
                return throwError(errorMessage);
              }
            }
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          console.log(errorMessage);
          window.alert('Something bad happen, please try again');
          return throwError(errorMessage);
        })
      )
  }

}

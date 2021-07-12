import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: any;
        let refreshToken: any;
        
        if(this.authService.getTokenLocalStr() && this.authService.getRefreshTokenLocalStr){
            token = this.authService.getTokenLocalStr();
            refreshToken = this.authService.getRefreshTokenLocalStr();

        } else {
            token = this.authService.getTokenSessionStr();
            refreshToken = this.authService.getRefreshTokenSessionStr();
        }

        
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }

        req = req.clone({
            headers: req.headers.set('Accept', 'application/json')
        });

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log(error.error.error);
                if (error.status === 401) {
                    if (error.error.error === 'invalid_token') {
                        this.authService.refreshToken({ refresh_token: refreshToken })
                            .subscribe(() => {
                                location.reload();
                            });
                    } else {
                        this.router.navigate(['login']).then(_ => console.log('redirect to login'));
                    }
                }
                return throwError(error);
            }));
    }

}
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: any;
        // let refreshToken: any;
        
        if(this.authService.getTokenLocalStr() && this.authService.getRefreshTokenLocalStr){
            token = this.authService.getTokenLocalStr();
            // refreshToken = this.authService.getRefreshTokenLocalStr();

        } else {
            token = this.authService.getTokenSessionStr();
            // refreshToken = this.authService.getRefreshTokenSessionStr();
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
            }))
    }

}
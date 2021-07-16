import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';



const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const OAUTH_CLIENT = 'dd_client';
const OAUTH_SECRET = 'dd_secret';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private _isAuthenticated = false;

  private http_options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
    })
  };


  private static log(message: string): any {
    console.log(message);
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }
  set isAuthenticated(isAuth) {
    this._isAuthenticated = isAuth;
    
  }


  constructor(private httpClient: HttpClient) {}


  getTokenLocalStr(): any {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshTokenLocalStr(): any {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  saveTokenLocalStr(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshTokenLocalStr(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeTokenLocalStr(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshTokenLocalStr(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }

  getIsRememberPaswordLocalStr() {
    return localStorage.getItem('isRememberPassword');
  }

  saveIsRememberPasswordLocalStr(isRemember: string) {
    localStorage.setItem('isRememberPassword', isRemember);
  }
  removeIsRememberPasswordLocalStr(): void {
    sessionStorage.removeItem('isRememberPassword');
  }

  getIsAuthenticatedLocalStr() {
    return localStorage.getItem('isAuthenticated');
  }

  saveIsAuthenticatedLocalStr(isAuthenticated: string) {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }

  removeIsAuthenticatedLocalStr(): void {
    sessionStorage.removeItem('isAuthenticated');
  }


  getTokenSessionStr(): any {
    return sessionStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshTokenSessionStr(): any {
    return sessionStorage.getItem(REFRESH_TOKEN)
  }

  saveTokenSessionStr(token: string): void {
    sessionStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshTokenSessionStr(refreshToken: string): void {
    sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeTokenSessionStr(): void {
    sessionStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshTokenSessionStr(): void {
    sessionStorage.removeItem(REFRESH_TOKEN);
  }


  getIsAuthenticatedSessionStr() {
    return sessionStorage.getItem('isAuthenticated');
  }

  saveIsAuthenticatedSessionStr(isAuthenticated: string) {
    sessionStorage.setItem('isAuthenticated', isAuthenticated);
  }

  removeIsAuthenticatedSessionStr(): void {
    sessionStorage.removeItem('isAuthenticated');
  }

  


  getChannels() {
    return this.httpClient.get(`${this.baseUrl}/api/delta-digital-media-microservice/channel/channels`);
  }

  // register() {
  //   const body = {

  //     birthDate: null,
  //     email: 'name.surname@gmail.com',
  //     name: 'Name',
  //     password: 'helloH123',
  //     phoneNumber: '094789856',
  //     surname: 'Surname'

  //   }

  //   return this.httpClient.post(`${this.baseUrl}/user/register`, body);
  // }



  login(userCredentials: any): Observable<any> {

    this.removeTokenLocalStr();
    this.removeRefreshTokenLocalStr();
    this.removeIsAuthenticatedLocalStr();
    this.removeIsRememberPasswordLocalStr();
    const body = new HttpParams()
      .set('scope', 'read')
      .set('grant_type', 'password')
      .set('username', userCredentials.email)
      .set('password', userCredentials.password);


    return this.httpClient.post<any>(`${this.baseUrl}/oauth/token`, body, this.http_options)
      .pipe(
        tap(res => {
          const isRemeberPassword = this.getIsRememberPaswordLocalStr();
          if(isRemeberPassword && JSON.parse(isRemeberPassword)){
            this.saveTokenLocalStr(res.access_token);
            this.saveRefreshTokenLocalStr(res.refresh_token);
            this.saveIsAuthenticatedLocalStr('true');
            this.isAuthenticated = true;
          } else {
            this.saveTokenSessionStr(res.access_token);
            this.saveRefreshTokenSessionStr(res.refresh_token);
            this.saveIsAuthenticatedSessionStr('true');
            this.isAuthenticated = true;
          }
        }),
        // catchError(AuthService.handleError)
      );
  }

  refreshToken(refreshData: any): Observable<any> {
    this.removeTokenLocalStr();
    this.removeRefreshTokenLocalStr();
    this.removeIsAuthenticatedLocalStr();
    this.removeIsRememberPasswordLocalStr();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
    return this.httpClient.post<any>(`${this.baseUrl}/oauth/token`, body, this.http_options)
      .pipe(
        tap(res => {
          const isRemeberPassword = this.getIsRememberPaswordLocalStr();
          if(isRemeberPassword && JSON.parse(isRemeberPassword)){
            this.saveTokenLocalStr(res.access_token);
            this.saveRefreshTokenLocalStr(res.refresh_token);
            this.saveIsAuthenticatedLocalStr('true')

          } else {
            this.saveTokenSessionStr(res.access_token);
            this.saveRefreshTokenSessionStr(res.refresh_token);
            this.saveIsAuthenticatedSessionStr('true')

          }

        }),
        // catchError(AuthService.handleError)
      );
  }

  logout(): void {
    this.removeTokenLocalStr();
    this.removeRefreshTokenLocalStr();
    this.saveIsAuthenticatedLocalStr('false');
    this.saveIsRememberPasswordLocalStr('false');
  }

  // register(data: any): Observable<any> {
  //   return this.http.post<any>(API_URL + 'oauth/signup', data)
  //     .pipe(
  //       tap(_ => AuthService.log('register')),
  //       catchError(AuthService.handleError)
  //     );
  // }


  


}

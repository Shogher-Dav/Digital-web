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

  private http_options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
    })
  };

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private static log(message: string): any {
    console.log(message);
  }


  constructor(private httpClient: HttpClient) {}


  getToken(): any {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): any {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  saveToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }

  getIsRememberPasword() {
    return localStorage.getItem('isRememberPassword');
  }

  setIsRememberPassword(isRemember: string) {
    localStorage.setItem('isRememberPassword', isRemember);
  }

  getIsAuthenticated() {
    return localStorage.getItem('isAuthenticated');
  }

  setIsAuthenticated(isAuthenticated: string) {
    localStorage.setItem('isAuthenticated', isAuthenticated);
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

    this.removeToken();
    this.removeRefreshToken();
    const body = new HttpParams()
      .set('scope', 'read')
      .set('grant_type', 'password')
      .set('username', userCredentials.email)
      .set('password', userCredentials.password);


    return this.httpClient.post<any>(`${this.baseUrl}/oauth/token`, body, this.http_options)
      .pipe(
        tap(res => {
          const isRemeberPassword = this.getIsRememberPasword();
          if(isRemeberPassword && JSON.parse(isRemeberPassword)){
            this.saveToken(res.access_token);
            this.saveRefreshToken(res.refresh_token);
          }
        }),
        catchError(AuthService.handleError)
      );
  }

  refreshToken(refreshData: any): Observable<any> {
    this.removeToken();
    this.removeRefreshToken();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
    return this.httpClient.post<any>(`${this.baseUrl}/oauth/token`, body, this.http_options)
      .pipe(
        tap(res => {
          const isRemeberPassword = this.getIsRememberPasword();
          if(isRemeberPassword && JSON.parse(isRemeberPassword)){
            this.saveToken(res.access_token);
            this.saveRefreshToken(res.refresh_token);
          }

        }),
        catchError(AuthService.handleError)
      );
  }

  logout(): void {
    this.removeToken();
    this.removeRefreshToken();
    this.setIsAuthenticated('false');
    this.setIsRememberPassword('false');
  }

  // register(data: any): Observable<any> {
  //   return this.http.post<any>(API_URL + 'oauth/signup', data)
  //     .pipe(
  //       tap(_ => AuthService.log('register')),
  //       catchError(AuthService.handleError)
  //     );
  // }



}

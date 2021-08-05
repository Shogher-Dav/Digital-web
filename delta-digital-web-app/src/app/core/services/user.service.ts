import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  registerUser(user: IUser): Observable<any> {
  return this.httpClient.post(`${this.baseUrl}/user/register`, user)
  .pipe(
    // catchError(this.handleError)
  )
    
  }

}

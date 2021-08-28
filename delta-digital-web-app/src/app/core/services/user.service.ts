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
    return this.httpClient.post(`${this.baseUrl}/user/register`, user);
  }

  getCurrentUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.baseUrl}/user/current`);
  }

  updateCurrentUserInfo(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.baseUrl}/user/edit`, user);
  }


  deletecurrentUser(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/user/delete/${id}`);
  }

  changePassword(password: any) {
    return this.httpClient.put(`${this.baseUrl}/user/updatePassword`, password);

  }

  changeEmail(newEmail: string) {
    return this.httpClient.put(`${this.baseUrl}/user/complete-email`, newEmail);

  }

  sendEmailForForgetPassword(email: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/user/activate-code`, email);
  }


}

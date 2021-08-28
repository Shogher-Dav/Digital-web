import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IAbout } from '../interfaces/IAbout';
import { IContact } from '../interfaces/IContact';
import { IRules } from '../interfaces/IRules';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    showLogin$ = new BehaviorSubject(false);
    termsAndPolicyText$ = new BehaviorSubject('');
    private baseUrl = environment.baseUrl;



    constructor(private httpClient: HttpClient) { }

    getTermsAndRules(): Observable<IRules> {
        return this.httpClient.get<IRules>(`${this.baseUrl}/api/delta-digital-media-microservice/termsAndRules`)
            .pipe(
                tap(res => {
                    this.termsAndPolicyText$.next(res.description)
                })
            );

    }

    getAboutInfo(): Observable<IAbout> {
        return this.httpClient.get<IAbout>(`${this.baseUrl}/api/delta-digital-media-microservice/about`);

    }


    contactUs(msg: IContact): Observable<any> {
        return this.httpClient.post<IContact>(`${this.baseUrl}/api/delta-digital-media-microservice/contact/add`, msg)
    }

   
}
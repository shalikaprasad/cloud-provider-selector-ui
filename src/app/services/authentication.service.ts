import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MsAdalAngular6Service} from 'microsoft-adal-angular6';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  private baseUrl = 'https://cloud-provider-selector-backend.azurewebsites.net/oauth';

  constructor(
    private http: HttpClient,
    private adalService: MsAdalAngular6Service
    ) {
    // if (this.isUserLoggedIn()) {
    //   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //   this.currentUser = this.currentUserSubject.asObservable();
    // }
  }

  // public get currentUserValue(): User {
  //   if (this.currentUserSubject != null) { return this.currentUserSubject.value; }
  // }

  login(user) {
    const params = new URLSearchParams();
    params.append('username', user.userName);
    params.append('password', user.password);
    params.append('grant_type', 'password');

    const headers = {
      Authorization: 'Basic ' + btoa('prediction_system:pin'),
      'Content-type': 'application/x-www-form-urlencoded'
    };

    // return this.http.post(`${this.baseUrl}/token`, params.toString(), {headers});
    this.adalService.login();
  }

  getLoggedInUser(): any {
    return this.adalService.LoggedInUserEmail;
  }

  logOut() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUserName');
    this.adalService.logout();
    // this.currentUserSubject.next(null);
  }

  isUserLoggedIn() {
    const userName = localStorage.getItem('currentUserName');
    return !(userName === 'undefined' || userName === null);
  }

  getAccessToken() {
    if (this.isUserLoggedIn()) {
      // return JSON.parse(window.sessionStorage.getItem('token')).access_token;
      return this.adalService.accessToken;
    } else {
      return null;
    }
  }

}

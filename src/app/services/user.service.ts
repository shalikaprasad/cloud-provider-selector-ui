import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://cloud-provider-selector-backend.azurewebsites.net/api/user';
  private fd: any;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService
  ) { }

  getUser() {
    return this.http.get(this.baseUrl + '/getUser?access_token=' + this.authenticationService.getAccessToken());
  }

  getAllUsers() {
    return this.http.get(this.baseUrl + '/getAllUsers?access_token=' + this.authenticationService.getAccessToken());
  }

  deleteUser(id) {
    this.fd = this.authenticationService.getAccessToken();
    return this.http.get(this.baseUrl + '/deleteUser?access_token=' + this.fd + '&userId=' + id.toString());
  }

  updateUser(user) {
    return this.http.post(this.baseUrl + '/createUser?access_token=' + this.authenticationService.getAccessToken(), user);
  }


}

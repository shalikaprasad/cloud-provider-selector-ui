import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {first} from 'rxjs/operators';
import {AlertService} from '../../../services/alert.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../models/User';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { InteractionRequiredAuthError, AuthError } from 'msal';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lock = true;
  public isLoggedUser = false;
  currentUser: any;
  user: User = new User();
  userlogName: any;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private authService: MsalService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService,
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.getProfile();
    // this.userlog = this.authenticationService.getLoggedInUser();
    this.userlogName = this.currentUser?.displayName;
    localStorage.setItem('currentUserName', JSON.stringify(this.userlogName));
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    if (this.authenticationService.isUserLoggedIn()) {
      this.isLoggedUser = true;
    }
    if (this.currentUser === 'Prasad') {
      this.lock = false;
    }
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  logout() {
    this.authenticationService.logOut();
    localStorage.setItem('isOpenDashboard', String(false));
    localStorage.setItem('isOpenHome', String(false));
    this.router.navigate(['/login']);
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe({
        next: (profile) => {
          this.currentUser = profile;
        },
        error: (err: AuthError) => {
          // If there is an interaction required error,
          // call one of the interactive methods and then make the request again.
          if (InteractionRequiredAuthError.isInteractionRequiredError(err.errorCode)) {
            this.authService.acquireTokenPopup({
              scopes: this.authService.getScopesForEndpoint(GRAPH_ENDPOINT)
            })
              .then(() => {
                this.http.get(GRAPH_ENDPOINT)
                  .toPromise()
                  .then(profile => {
                    this.currentUser = profile;
                  });
              });
          }
        }
      });
  }

}

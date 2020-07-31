import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {first} from 'rxjs/operators';
import {AlertService} from '../../../services/alert.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../models/User';

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
  userlog: any;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService,
    ) {}

  ngOnInit() {
    this.userlog = this.authenticationService.getLoggedInUser();
    localStorage.setItem('currentUserName', JSON.stringify(this.userlog));
    this.currentUser = JSON.parse(localStorage.getItem('currentUserName'));
    if (this.authenticationService.isUserLoggedIn()) {
      this.isLoggedUser = true;
    }
    if (this.currentUser === 'shalikamanchanayaka38@gmail.com') {
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

}

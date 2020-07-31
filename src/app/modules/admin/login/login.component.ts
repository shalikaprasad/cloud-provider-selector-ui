import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../services/alert.service';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  user: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService,
  ) {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['/dashboard/home']);
    }
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;

    // this.user.userName = this.f.loginFormUserName.value;
    // this.user.password = this.f.loginFormPassword.value;

    this.authenticationService.login(this.user);

  }
}

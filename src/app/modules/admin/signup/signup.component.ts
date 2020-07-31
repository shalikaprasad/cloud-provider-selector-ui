import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../shared/models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../services/alert.service';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  user: User = new User();
  loading = false;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      registerOfficerName: ['', Validators.required],
      registerEmail: ['', Validators.required, Validators.email],
      registerPassword: ['', Validators.required],
      registerRePassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.user.userName = this.registerForm.value.registerOfficerName;
    this.user.email = this.registerForm.value.registerEmail;
    this.user.password = this.registerForm.value.registerPassword;

    this.userService.updateUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful');
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}

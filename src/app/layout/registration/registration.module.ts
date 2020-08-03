import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {VendorsModule} from '../../vendors/vendors.module';
import {RegistrationComponent} from './registration.component';
import {RouterModule} from '@angular/router';
import {NewsService} from '../../services/news.service';
import {LoginComponent} from '../../modules/admin/login/login.component';
import {SignupComponent} from '../../modules/admin/signup/signup.component';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';
import {LoadingComponent} from '../../modules/loading/loading.component';
import {MonitoringService} from '../../services/monitoring.service';
import {ErrorHandlerService} from '../../services/error-handler.service';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    SignupComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VendorsModule,
  ],
  providers: [
    AuthenticationService,
    UserService,
    NewsService,
    MonitoringService,
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ]
})
export class RegistrationModule { }

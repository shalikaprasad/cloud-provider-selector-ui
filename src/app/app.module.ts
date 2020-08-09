import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertService} from './services/alert.service';
import {NewsService} from './services/news.service';
import {DefaultModule} from './layout/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RegistrationModule} from './layout/registration/registration.module';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './services/user.service';
import {MsAdalAngular6Module} from 'microsoft-adal-angular6';
import {MonitoringService} from './services/monitoring.service';
import {ErrorHandlerService} from './services/error-handler.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MsalInterceptor} from '@azure/msal-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    RegistrationModule
  ],
  providers: [
    AlertService,
    NewsService,
    AuthenticationService,
    UserService,
    MonitoringService,
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    RegistrationModule,
    MsAdalAngular6Module.forRoot({
      tenant: 'b97ce255-751a-421e-91a8-2cd45e95da5e',
      clientId: '9f7b4077-98b6-4388-9e75-cbc840f4d2d9',
      redirectUri: 'https://cloud-provider-selector-ui.azurewebsites.net/dashboard/home',
      endpoints: {
        'api application url': 'https://login.microsoftonline.com/b97ce255-751a-421e-91a8-2cd45e95da5e/oauth2/token',
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'assets/sessionStorage',
      postLogoutRedirectUri: 'https://cloud-provider-selector-ui.azurewebsites.net',
    }),
  ],
  providers: [
    AlertService,
    NewsService,
    AuthenticationService,
    UserService,
    MonitoringService,
    { provide: ErrorHandler, useClass: ErrorHandlerService }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

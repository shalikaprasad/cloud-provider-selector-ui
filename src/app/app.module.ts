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
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

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
    HttpClientModule,
    MsalModule.forRoot({
        auth: {
          clientId: '5c9b1a21-17fc-4ad6-b9c5-61d28036ac65',
          authority: 'https://login.microsoftonline.com/common',
          redirectUri: 'https://cloud-provider-selector-ui.azurewebsites.net/dashboard/home/',
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE, // set to true for IE 11
        },
      },
      {
        popUp: !isIE,
        consentScopes: [
          'user.read',
          'openid',
          'profile',
        ],
        unprotectedResources: [],
        protectedResourceMap: [
          ['https://graph.microsoft.com/v1.0/me', ['user.read']]
        ],
        extraQueryParameters: {}
      })
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

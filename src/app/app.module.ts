import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertService} from './services/alert.service';
import {NewsService} from './services/news.service';
import {DefaultModule} from './layout/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoadingComponent} from './modules/loading/loading.component';
import { QuickEstimateComponent } from './modules/dashboard/quick-estimate/quick-estimate.component';
import { AdvancedEstimateComponent } from './modules/dashboard/advanced-estimate/advanced-estimate.component';
import { ModelStatusComponent } from './modules/dashboard/model-status/model-status.component';
import { GroupChattingComponent } from './modules/dashboard/group-chatting/group-chatting.component';
import { HelpComponent } from './modules/dashboard/help/help.component';
import { RegistrationComponent } from './layout/registration/registration.component';
import { LoginComponent } from './modules/admin/login/login.component';
import { SignupComponent } from './modules/admin/signup/signup.component';
import {RegistrationModule} from './layout/registration/registration.module';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './services/user.service';
import {MsAdalAngular6Module} from 'microsoft-adal-angular6';

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
  providers: [AlertService, NewsService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

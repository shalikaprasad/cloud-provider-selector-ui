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

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    QuickEstimateComponent,
    AdvancedEstimateComponent,
    ModelStatusComponent,
    GroupChattingComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule
  ],
  providers: [AlertService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

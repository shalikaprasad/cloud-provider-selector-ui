import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {HomeComponent} from '../../modules/dashboard/home/home.component';
import {SharedModule} from '../../shared/shared.module';
import {VendorsModule} from '../../vendors/vendors.module';
import {AppRoutingModule} from '../../app-routing.module';
import {NewsComponent} from '../../modules/dashboard/news/news.component';
import {NewsEditorComponent} from '../../modules/admin/news-editor/news-editor.component';
import {NewsTableComponent} from '../../modules/admin/news-table/news-table.component';
import {AppComponent} from '../../app.component';
import {QuickEstimateComponent} from '../../modules/dashboard/quick-estimate/quick-estimate.component';
import {AdvancedEstimateComponent} from '../../modules/dashboard/advanced-estimate/advanced-estimate.component';
import {ModelStatusComponent} from '../../modules/dashboard/model-status/model-status.component';
import {GroupChattingComponent} from '../../modules/dashboard/group-chatting/group-chatting.component';
import {HelpComponent} from '../../modules/dashboard/help/help.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    NewsComponent,
    NewsEditorComponent,
    NewsTableComponent,
    QuickEstimateComponent,
    AdvancedEstimateComponent,
    ModelStatusComponent,
    GroupChattingComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VendorsModule,
    AppRoutingModule
  ]
})
export class DefaultModule { }

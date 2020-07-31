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


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    NewsComponent,
    NewsEditorComponent,
    NewsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VendorsModule,
    AppRoutingModule
  ]
})
export class DefaultModule { }

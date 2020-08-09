import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/dashboard/home/home.component';
import {LoadingComponent} from './modules/loading/loading.component';
import {DefaultComponent} from './layout/default/default.component';
import {NewsComponent} from './modules/dashboard/news/news.component';
import {QuickEstimateComponent} from './modules/dashboard/quick-estimate/quick-estimate.component';
import {AdvancedEstimateComponent} from './modules/dashboard/advanced-estimate/advanced-estimate.component';
import {ModelStatusComponent} from './modules/dashboard/model-status/model-status.component';
import {GroupChattingComponent} from './modules/dashboard/group-chatting/group-chatting.component';
import {HelpComponent} from './modules/dashboard/help/help.component';
import {NewsEditorComponent} from './modules/admin/news-editor/news-editor.component';
import {NewsTableComponent} from './modules/admin/news-table/news-table.component';
import {LoginComponent} from './modules/admin/login/login.component';
import {SignupComponent} from './modules/admin/signup/signup.component';
import {MsalGuard} from '@azure/msal-angular';


const routes: Routes = [
  {
    path: '',
    component: LoadingComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DefaultComponent,

    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [
          MsalGuard
        ]
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'quick-estimate',
        component: QuickEstimateComponent
      },
      {
        path: 'advanced-estimate',
        component: AdvancedEstimateComponent
      },
      {
        path: 'model-status',
        component: ModelStatusComponent
      },
      {
        path: 'group-chatting',
        component: GroupChattingComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'news-editor',
        component: NewsEditorComponent
      },
      {
        path: 'news-table',
        component: NewsTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

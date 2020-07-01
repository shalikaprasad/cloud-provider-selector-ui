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


const routes: Routes = [
  {
    path: '',
    component: LoadingComponent
  },
  {
    path: 'dashboard',
    component: DefaultComponent,

    children: [
      {
        path: 'home',
        component: HomeComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

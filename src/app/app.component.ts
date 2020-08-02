import { Component } from '@angular/core';
import {MonitoringService} from './services/monitoring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cloud-provider-selector-ui';
  constructor(private monitoringService: MonitoringService) {
    this.monitoringService.logPageView('App', '/');
  }
}

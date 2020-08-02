import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import { AppInsights } from 'applicationinsights-js';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  private config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: environment.appInsights.instrumentationKey
  };

  constructor() {
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(this.config);
    }
  }

  logPageView(name: string, url?: string, properties?: any, measurements?: any, duration?: number) {
    AppInsights.trackPageView(name, url, properties, measurements, duration);
  }

  logEvent(name: string, properties?: any, measurements?: any) {
    AppInsights.trackEvent(name, properties, measurements);
  }

  logMetric(name: string, average: number) {
    AppInsights.trackMetric( name, average);
  }

  logException(exception: Error) {
    AppInsights.trackException(exception);
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    AppInsights.trackTrace( message, properties);
  }
}

import { Component, OnInit } from '@angular/core';
import {MonitoringService} from '../../../services/monitoring.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private monitoringService: MonitoringService) {
    monitoringService.logPageView('home', '/dashboard/home');
  }

  ngOnInit(): void {
  }

}

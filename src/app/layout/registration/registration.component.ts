import { Component, OnInit } from '@angular/core';
import {MonitoringService} from '../../services/monitoring.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private monitoringService: MonitoringService) { }

  ngOnInit(): void {
  }

}

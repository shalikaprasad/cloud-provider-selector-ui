import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MonitoringService} from '../../services/monitoring.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(
    router: Router,
    monitoringService: MonitoringService
  ) {
    monitoringService.logPageView('loading', '/');
    setTimeout(() => {
        if (String(true) === localStorage.getItem('isOpenHome')) {
          router.navigate(['/dashboard/home']).then(r => console.log('open home page'));
        } else {
          router.navigate(['/login']);
        }
      },
      3000);
  }

  ngOnInit(): void {
  }

}

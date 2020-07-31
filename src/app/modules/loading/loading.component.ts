import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(router: Router) {
    setTimeout(() => {
        if (String(true) === localStorage.getItem('isOpenHome')) {
          window.open('https://cloud-provider-selector-ui.azurewebsites.net/', '_blank');
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

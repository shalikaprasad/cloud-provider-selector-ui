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
      window.open('http://localhost:4200/', '_blank');
      router.navigate(['/dashboard/home']).then(r => console.log('open home page'));
      },
      3000);
  }

  ngOnInit(): void {
  }

}

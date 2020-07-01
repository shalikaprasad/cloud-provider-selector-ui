import { Component, OnInit } from '@angular/core';
import {News} from '../../../shared/models/News';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from '../../../services/news.service';
import {FileService} from '../../../services/file.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public newsList: News[];
  public baseImagePath: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private newsListService: NewsService,
              private pathService: FileService
  ) {
    this.baseImagePath = pathService.getImageBasePath() + 'news';
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.newsListService.getNewsList(5).subscribe((res) => {
      this.newsList = res['body'];
    });
  }

}

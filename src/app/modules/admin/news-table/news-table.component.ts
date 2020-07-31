import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {Router} from '@angular/router';
import {News} from '../../../shared/models/News';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})
export class NewsTableComponent implements OnInit {

  newsList: News[] = [];
  public popoverTitle = 'Delete News';
  public popoverMessage = 'Are You Sure Delete News?';
  public cancelClicked = false;

  constructor(
    public newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsService.getNewsList(10).subscribe((data: News[]) => {
      this.newsList = data['body'];
    });
  }

  deleteFarmer(id, farmer) {
    this.newsService.deleteNews(id).pipe(first())
      .subscribe(
        data => {
          const index = this.newsList.indexOf(farmer);
          this.newsList.splice(index, 1);
        });
  }

  updateNews(news: News) {
    localStorage.setItem('updateNews', JSON.stringify(news));
    this.router.navigate(['/dashboard/news-editor/' + news.id]);
  }
}

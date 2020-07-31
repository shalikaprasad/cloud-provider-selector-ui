import { Injectable } from '@angular/core';
import {News} from '../shared/models/News';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public news: News[];
  private baseUrl = 'https://cloud-provider-selector-backend.azurewebsites.net/api/news';

  constructor(
    private http: HttpClient
  ) {}

  getNewsList(count) {
    const params = new URLSearchParams();
    params.append('count', count);

    return this.http.get(`${this.baseUrl}/` + count);
  }

  deleteNews(id) {
    return this.http.get(this.baseUrl + '/deleteNews?newsId=' + id.toString());
  }

  updateNews(news) {
    return this.http.post(this.baseUrl + '/create', news);
  }
}

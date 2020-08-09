import { Injectable } from '@angular/core';
import {News} from '../shared/models/News';
import {HttpClient} from '@angular/common/http';
import {MonitoringService} from './monitoring.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public news: News[];
  private baseUrl = 'https://cloud-provider-selector-backend.azurewebsites.net/api/news';
  // private baseUrl = 'http://localhost:8080/api/news';

  constructor(
    private http: HttpClient,
    private monitoringService: MonitoringService
  ) {}

  getNewsList(count) {
    this.monitoringService.logTrace('Get News List', {count});
    const params = new URLSearchParams();
    params.append('count', count);

    return this.http.get(`${this.baseUrl}/` + count);
  }

  deleteNews(id) {
    this.monitoringService.logTrace('Delete News', {id});
    return this.http.get(this.baseUrl + '/deleteNews?newsId=' + id.toString());
  }

  updateNews(news) {
    this.monitoringService.logTrace('Create News', {news});
    return this.http.put(this.baseUrl + '/create', news);
  }
}

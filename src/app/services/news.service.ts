import { Injectable } from '@angular/core';
import {News} from '../shared/models/News';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public news: News[];
  private baseUrl = 'http://localhost:8080/api/news';

  constructor(
    private http: HttpClient
  ) {}

  getNewsList(count) {
    const params = new URLSearchParams();
    params.append('count', count);

    return this.http.get(`${this.baseUrl}/` + count);
  }
}

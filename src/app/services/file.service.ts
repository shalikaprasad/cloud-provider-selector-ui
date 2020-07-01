import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private pathUrl = 'http://localhost:8080/images/';

  constructor(
    private http: HttpClient
  ) {}

  getImageBasePath() {
    return this.pathUrl;
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private pathUrl = 'https://cloudproviderstorage.blob.core.windows.net/assets/';
  // private azureFunctionUrl = 'https://upload-image-function.azurewebsites.net/api/HttpTriggerJava';
  private localFunctionUrl = 'https://cloud-provider-selector-azure-function.azurewebsites.net/api/upload-image/';
  constructor(
    private http: HttpClient
  ) {
  }

  getImageBasePath() {
    return this.pathUrl;
  }

  uploadImage(fileData) {
    return this.http.post(this.localFunctionUrl , fileData);
  }

  getImage(id) {
    const data: FormData = new FormData();
    data.append('imageId', id);
    return this.http.post(this.localFunctionUrl , data);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MonitoringService} from './monitoring.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private pathUrl = 'https://cpsstorage.blob.core.windows.net/assets/';
  // private azureFunctionUrl = 'https://upload-image-function.azurewebsites.net/api/HttpTriggerJava';
  private localFunctionUrl = 'https://cloud-provider-selector-azure-function.azurewebsites.net/api/';
  // private localFunctionUrl = 'http://localhost:7071/api/';
  constructor(
    private http: HttpClient,
    private monitoringService: MonitoringService
  ) {
  }

  getImageBasePath() {
    this.monitoringService.logTrace('Get Image Path');
    return this.pathUrl;
  }

  uploadImage(fileData) {
    this.monitoringService.logTrace('Upload Image', fileData);
    return this.http.post(this.localFunctionUrl + 'upload-image' , fileData);
  }

  getImage(id) {
    this.monitoringService.logTrace('Get Image', id);
    // const data: FormData = new FormData();
    // data.append('imageId', id);
    return this.http.get(this.localFunctionUrl + 'get-image/' + id);
  }
}

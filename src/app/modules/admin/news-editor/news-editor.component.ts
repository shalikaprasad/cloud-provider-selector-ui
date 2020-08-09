import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {News} from '../../../shared/models/News';
import {FileService} from '../../../services/file.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../services/alert.service';
import {NewsService} from '../../../services/news.service';
import {ImageFile} from '../../../shared/models/ImageFile';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.scss']
})
export class NewsEditorComponent implements OnInit {

  newsId: any;
  createNewsForm: FormGroup;
  loading = false;
  submitted = false;
  news: News = new News();
  private isAgree: boolean;
  newsCategoryList: any = ['Select News Category', 'Social', 'Water', 'Soil', 'Wind', 'Seed'];
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  base64Data: any;
  public baseImagePath: any;
  imageFile: ImageFile = new ImageFile();

  files: any;
  rawFiles: any;
  type = "file";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private alertService: AlertService,
    private actRoute: ActivatedRoute,
    private fileService: FileService) {
    this.baseImagePath = fileService.getImageBasePath() + 'news';
    this.newsId = this.actRoute.snapshot.params.id;
    const updatedNews = JSON.parse(localStorage.getItem('updateNews'));
    if (updatedNews !== undefined && updatedNews !== null && updatedNews.id.toString() === this.newsId) {
      this.news = updatedNews;
      this.previewUrl = this.baseImagePath + '/' + this.news.imageFileName;
    } else {
      this.news = new News();
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.createNewsForm.controls[controlName].hasError(errorName);
  }

  // convenience getter for easy access to form fields
  get f() { return this.createNewsForm.controls; }

  ngOnInit() {
    let news: any;
    if (this.news.category !== undefined) {
      news = this.news.category;
    } else {
      news = 'Select News Category';
    }

    this.createNewsForm = this.formBuilder.group({
      topic: [this.news.topic, [Validators.required]],
      category: [news, [Validators.required]],
      description: [this.news.description, [Validators.required]],
      shortDescription: [this.news.shortDescription, []],
      month: [this.news.month, [Validators.required]],
      date: [this.news.date, [Validators.required]],
      isActive: [this.news.isActive, [Validators.required]],
      fileData: [''],
      isAgree: ['', [Validators.required]],
    });
  }

  onFileChanges(fileInput: any) {
    this.fileData = fileInput[0];
    this.imageFile.base64 = fileInput[0].base64;
    console.log("File changed By Method :: ", fileInput);
    console.log("File changed By Binding :: ", this.files);
    console.log("Raw files :: ", this.rawFiles);
    // this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }

  onSubmitNews() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    // if (this.createNewsForm.invalid) {
    //   return;
    // }

    this.loading = true;

    this.news.topic = this.f.topic.value;
    this.news.category = this.f.category.value;
    this.news.description = this.f.description.value;
    this.news.shortDescription = this.f.shortDescription.value;
    this.news.month = this.f.month.value;
    this.news.date = this.f.date.value;
    this.news.isActive = this.f.isActive.value;
    this.isAgree = this.f.isAgree.value;

    this.fileService.uploadImage(this.imageFile)
      .pipe(first())
      .subscribe(
        data => {
          this.news.pictureId = data['id'];

          this.newsService.updateNews(this.news)
            .pipe(first())
            .subscribe(
              data => {
                this.router.navigate(['/dashboard/news']);
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

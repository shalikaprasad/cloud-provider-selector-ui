import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HighchartsChartModule} from 'highcharts-angular';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {TreeViewModule} from '@syncfusion/ej2-angular-navigations';
import {MatExpansionModule} from '@angular/material/expansion';
import {AlifeFileToBase64Module} from 'alife-file-to-base64';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatSidenavModule,
    MatDividerModule,
    TranslateModule,
    FormsModule,
    TreeViewModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    HighchartsChartModule,
    MatExpansionModule,
    AlifeFileToBase64Module
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    HttpClientModule,
    TranslateModule,
    MatSidenavModule,
    MatDividerModule,
    TranslateModule,
    FormsModule,
    TreeViewModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    ConfirmationPopoverModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    HighchartsChartModule,
    MatExpansionModule,
    AlifeFileToBase64Module
  ]
})
export class VendorsModule { }

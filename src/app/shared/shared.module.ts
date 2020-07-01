import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionComponent } from './components/section/section.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { DialogBoxComponent } from './widgets/dialog-box/dialog-box.component';
import { PieComponent } from './widgets/pie/pie.component';
import {VendorsModule} from '../vendors/vendors.module';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SectionComponent, SidebarComponent, AreaComponent, DialogBoxComponent, PieComponent],
  imports: [
    CommonModule,
    VendorsModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SidebarComponent,
    DialogBoxComponent,
    AreaComponent,
    PieComponent
  ],
  entryComponents: [
    DialogBoxComponent
  ]
})
export class SharedModule { }

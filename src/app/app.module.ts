import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import{ UserService } from './service/user.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner"; 
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,NgxChartsModule,
    HttpClientModule,NgxSpinnerModule 
  ],
  providers: [UserService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppComponent
  ],
  providers:[],
  bootstrap:[]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {GoogleBooksService} from "./services/google-books";
import { LayoutModule } from '@angular/cdk/layout';
import { BookItemComponent } from './pages/book-item/book-item.component';


@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [
    GoogleBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

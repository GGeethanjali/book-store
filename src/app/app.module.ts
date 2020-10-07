import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {GoogleBooksService} from "./services/google-books";
import { LayoutModule } from '@angular/cdk/layout';
import { BookItemComponent } from './pages/book-item/book-item.component';
import { MenuComponent } from './pages/menu/menu.component';
import {TabMenuModule} from "primeng/tabmenu";
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    MenuComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    TabMenuModule,
    InputTextModule
  ],
  providers: [
    GoogleBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

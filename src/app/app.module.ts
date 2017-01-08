import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent }      from './app.component';
import { AppRoutingModule }      from './app.routing';

import { HttpService }       from './../providers/http';
import { BooksDataService }  from './../components/books/data-service';
import { BookCardComponent } from './../components/book-card/card';
import { SearchPage }        from './../pages/search/search';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    BookCardComponent,
    SearchPage
  ],

  bootstrap: [
    AppComponent
  ],

  entryComponents: [
    AppComponent,
    BookCardComponent,
    SearchPage
  ],

  providers: [
    HttpService,
    BooksDataService
  ]
})
export class AppModule { }

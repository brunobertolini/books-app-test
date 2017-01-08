import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { SharedModule }  from './../shared/shared.module';
import { BooksModule }  from './../books/books.module';

import { SearchService }   from './search.service';
import { SearchRoutingModule }   from './search-routing.module';

import { SearchBoxComponent }   from './search-box/search-box.component';
import { SearchResultComponent }   from './search-result/search-result.component';


@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    InfiniteScrollModule,
    SharedModule,
    BooksModule,
    SearchRoutingModule
  ],

  declarations: [
    SearchBoxComponent,
    SearchResultComponent
  ],

  entryComponents: [
    SearchBoxComponent,
    SearchResultComponent
  ],

  exports: [
    SearchBoxComponent,
    SearchResultComponent
  ],

  providers: [
    SearchService
  ]
})
export class SearchModule {}

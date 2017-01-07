import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

import { HttpService }      from './providers/http';
import { BooksDataService } from './components/books/data-service';

import { SearchPage } from './pages/search/search';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],

  declarations: [
    AppComponent,
    SearchPage
  ],

  bootstrap: [
    AppComponent
  ],

  entryComponents: [
    AppComponent,
    SearchPage
  ],

  providers: [
    HttpService,
    BooksDataService
  ]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }      from './app.component';
import { AppRoutingModule }  from './app-routing.module';

import { SearchModule }  from './search/search.module';
import { BooksModule }  from './books/books.module';

@NgModule({

  imports: [
    SearchModule,
    BooksModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent
  ],

  bootstrap: [
    AppComponent
  ],

  entryComponents: [
    AppComponent
  ],

  providers: [
  ]

})
export class AppModule { }

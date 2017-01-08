import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule }  from './../shared/shared.module';

import { BooksService }   from './books.service';
import { BooksRoutingModule }   from './books-routing.module';

import { BookCardComponent } from './card/book-card.component';
import { BookDetailsComponent } from './details/book-details.component';

@NgModule({

  imports: [
    BrowserModule,
    SharedModule,
    BooksRoutingModule
  ],

  declarations: [
    BookCardComponent,
    BookDetailsComponent
  ],

  entryComponents: [
    BookCardComponent,
    BookDetailsComponent
  ],

  exports: [
    BookCardComponent,
    BookDetailsComponent
  ],

  providers: [
    BooksService
  ]

})
export class BooksModule {}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule }  from './../shared/shared.module';

import { BooksService }   from './books.service';
import { BooksRoutingModule }   from './books-routing.module';

import { FavoritesService } from './favorites/favorites.service';

import { BookCardComponent } from './card/book-card.component';
import { BookDetailsComponent } from './details/book-details.component';
import { FavoritesComponent }  from './favorites/favorites.component';

@NgModule({

  imports: [
    BrowserModule,
    SharedModule,
    BooksRoutingModule
  ],

  declarations: [
    BookCardComponent,
    BookDetailsComponent,
    FavoritesComponent
  ],

  entryComponents: [
    BookCardComponent,
    BookDetailsComponent,
    FavoritesComponent
  ],

  exports: [
    BookCardComponent,
    BookDetailsComponent,
    FavoritesComponent
  ],

  providers: [
    BooksService,
    FavoritesService
  ]

})
export class BooksModule {}

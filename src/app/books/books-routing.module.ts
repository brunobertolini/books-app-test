import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailsComponent }  from './details/book-details.component';
import { FavoritesComponent }  from './favorites/favorites.component';

const booksRoutes: Routes = [
  { path: 'books/favorites',  component: FavoritesComponent },
  { path: 'books/:id',  component: BookDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(booksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule { }

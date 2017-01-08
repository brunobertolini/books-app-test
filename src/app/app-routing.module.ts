import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'books',
    loadChildren: 'src/app/books/books.module#BooksModule'
  },
  {
    path: 'search',
    loadChildren: 'src/app/search/search.module#SearchModule'
  },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

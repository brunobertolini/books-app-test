import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPage }        from './../pages/search/search';
import { BookPage }        from './../pages/book/show';

const appRoutes: Routes = [
  {path: '', component: SearchPage},
  {path: 'book/:id', component: BookPage}
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

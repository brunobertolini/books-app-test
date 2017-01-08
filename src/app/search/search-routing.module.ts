import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultComponent }  from './search-result/search-result.component';

const searchRoutes: Routes = [
  { path: 'search',  component: SearchResultComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }

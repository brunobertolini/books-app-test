import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPage }        from './../pages/search/search';

const appRoutes: Routes = [{
  path: '',
  component: SearchPage
}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

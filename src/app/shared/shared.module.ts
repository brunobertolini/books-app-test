import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';

import { HttpService }   from './http.service';
import { HighlightPipe } from './highlight.pipe';

@NgModule({

  imports: [
    HttpModule
  ],

  declarations: [
    HighlightPipe
  ],

  exports: [
    HighlightPipe
  ],

  providers: [
    HttpService
  ]

})
export class SharedModule {}

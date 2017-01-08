import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksDataService } from './../../components/books/data-service';

@Component({
    templateUrl: 'src/pages/book/show.html',
    styleUrls: ['src/pages/book/show.css']
})
export class BookPage {
    public book: any;

    constructor(
        private route: ActivatedRoute,
        private dataservice: BooksDataService
    ) {
    }

    ngOnInit() {
        this.dataservice
            .show(this.route.params.value.id)
            .then((book: any) => this.book = book);
    }
}

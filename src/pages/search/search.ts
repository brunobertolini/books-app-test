import { Component } from '@angular/core';

import { BooksDataService } from './../../components/books/data-service';


@Component({
    selector: 'search',
    templateUrl: 'src/pages/search/search.html'
})
export class SearchPage {
    public books: Array<any> = [];

    constructor(public dataservice: BooksDataService) {
    }

    exec(event) {
        if (!event.target.value || event.target.value.trim() === '') {
            return this.books = [];
        }

        this.dataservice
            .search(event.target.value)
            .then((result) => {
                this.books = result.items;
            });
    }
}

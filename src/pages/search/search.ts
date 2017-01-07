import { Component } from '@angular/core';

import { BooksDataService } from './../../components/books/data-service';


@Component({
    selector: 'search',
    templateUrl: 'src/pages/search/search.html',
    styleUrls: ['src/pages/search/search.css']
})
export class SearchPage {
    public result: any = {
        totalItems: 0
    };

    constructor(public dataservice: BooksDataService) {
    }

    exec(event) {
        if (!event.target.value || event.target.value.trim() === '') {
            return this.result = {
                totalItems: 0
            };
        }

        this.dataservice
            .search(event.target.value)
            .then((response) => {
                this.result = response;
            });
    }
}

import { Component } from '@angular/core';

import { BooksDataService } from './../../components/books/data-service';


@Component({
    templateUrl: 'src/pages/search/search.html',
    styleUrls: ['src/pages/search/search.css']
})
export class SearchPage {
    public q: string;
    public maxResults: number = 10;
    public startIndex: number = 0;
    public result: any = {totalItems: 0};

    constructor(public dataservice: BooksDataService) {
    }

    exec(event) {
        this.startIndex = 0;
        this.q = null;
        this.result = {totalItems: 0};

        if (!event.target.value || event.target.value.trim() === '') {
            return;
        }

        this.q = event.target.value;
        this.load();
    }

    load() {
        let options = {
            q: this.q,
            startIndex: this.startIndex,
            maxResults: this.maxResults
        };

        this.dataservice
            .search(options)
            .then((response) => {
                if (this.result.totalItems) {
                    this.result.items = this.result.items.concat(response.items);
                } else {
                    this.result = response;
                }

                this.startIndex += this.maxResults;
            });
    }
}

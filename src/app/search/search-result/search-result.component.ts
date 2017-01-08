import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SearchService } from './../search.service';


@Component({
    selector: 'search-result',
    templateUrl: 'src/app/search/search-result/search-result.component.html',
    styleUrls: ['src/app/search/search-result/search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    public q: string;
    public result: any;
    public maxResults: number;
    public startIndex: number;

    constructor(
        private route: ActivatedRoute,
        private service: SearchService
    ) {
        this.reset();
    }

    ngOnInit() {
        this.subscription = this.route.queryParams
            .subscribe((param: any) => {
                this.reset();

                if (param.q && param.q !== '') {
                    this.q = param.q;
                    this.load(param.q);
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    reset() {
        this.result = {totalItems: 0};
        this.maxResults = 10;
        this.startIndex = 0;
        this.q = null;
    }

    load(term) {
        let options = {
            q: term,
            startIndex: this.startIndex,
            maxResults: this.maxResults
        };

        this.service
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

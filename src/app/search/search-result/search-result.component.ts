import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { SearchService } from './../search.service';


@Component({
    selector: 'search-result',
    templateUrl: 'src/app/search/search-result/search-result.component.html'
    // styleUrls: ['src/app/search/search-result/search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    public q: string;
    public maxResults: number = 10;
    public startIndex: number = 0;
    public result: any = {totalItems: 0};

    constructor(
        private route: ActivatedRoute,
        private service: SearchService
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.queryParams
            .subscribe((param: Params) => {
                if (param.q && param.q !== '') {
                    this.load(param.q);
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { BooksService } from './../books.service';

@Component({
    templateUrl: 'src/app/books/details/book-details.component.html',
    styleUrls: ['src/app/books/details/book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    public book: any;

    constructor(
        private route: ActivatedRoute,
        private service: BooksService
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params
            .subscribe((param: any) => {
                if (param.id && param.id !== '') {
                    this.load(param.id);
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    load(id) {
        this.service
            .show(id)
            .then((book: any) => this.book = book);
    }
}

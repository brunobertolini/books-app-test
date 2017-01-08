import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { BooksService } from './../books.service';
import { FavoritesService } from './../favorites/favorites.service';


@Component({
    templateUrl: 'src/app/books/details/book-details.component.html',
    styleUrls: ['src/app/books/details/book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    public book: any;
    public favorite: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private service: BooksService,
        private favorites: FavoritesService
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
            .then((book: any) => {
                this.book = book;
                this.favorite = this.favorites.exists(this.book);
            });
    }


    favoriteToggle() {
        this.favorite = !this.favorite;

        (this.favorite)
            ? this.favorites.set(this.book)
            : this.favorites.remove(this.book);
    }
}

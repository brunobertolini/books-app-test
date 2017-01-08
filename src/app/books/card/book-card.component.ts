import { Component, OnInit } from '@angular/core';

import { FavoritesService } from './../favorites/favorites.service';


@Component({
    selector: 'book-card',
    templateUrl: 'src/app/books/card/book-card.component.html',
    styleUrls: ['src/app/books/card/book-card.component.css'],
    inputs: [
        'book:data',
        'term:highlight'
    ]
})
export class BookCardComponent implements OnInit {
    public book: any;
    public term: any;
    public favorite: boolean = false;

    constructor(
        private favorites: FavoritesService
    ) {
    }

    ngOnInit() {
        this.favorite = this.favorites.exists(this.book);
    }

    favoriteToggle() {
        this.favorite = !this.favorite;

        (this.favorite)
            ? this.favorites.set(this.book)
            : this.favorites.remove(this.book);
    }
}

import { Component, OnInit } from '@angular/core';

import { FavoritesService } from './favorites.service';


@Component({
  templateUrl: 'src/app/books/favorites/favorites.component.html',
  styleUrls: ['src/app/books/favorites/favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    books: Array<any>;

    constructor(
        private service: FavoritesService
    ) {
    }

    ngOnInit() {
        this.books = this.service.books;
    }

}


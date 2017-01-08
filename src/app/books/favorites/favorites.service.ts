import {Injectable} from '@angular/core';


@Injectable()
export class FavoritesService {
    storageKey: string = 'FAVORITES';
    books: any = [];

    constructor() {
        let books = localStorage.getItem(this.storageKey);

        (books !== null)
            ? this.books = JSON.parse(books)
            : this.persist()
    }

    persist() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.books));
    }

    set(book) {
        let exists = this.books.filter((item) => item.id === book.id);

        if (!exists.length) {
            this.books.push(book);
            this.persist();
        }
    }

    exists(book) {
        let books = this.books.filter((item) => item.id === book.id);
        return books.length;
    }

    remove(book) {
        let index = this.books.findIndex((item) => item.id === book.id);

        if (index > -1) {
            this.books.splice(index, 1);
        }

        this.persist();
    }
}

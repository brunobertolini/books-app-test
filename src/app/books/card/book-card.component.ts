import { Component } from '@angular/core';


@Component({
    selector: 'book-card',
    templateUrl: 'src/app/books/card/book-card.component.html',
    styleUrls: ['src/app/books/card/book-card.component.css'],
    inputs: ['book:data']
})
export class BookCardComponent {
    public book: any;

    constructor() {
    }
}

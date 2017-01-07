import { Component } from '@angular/core';

@Component({
    selector: 'book-card',
    templateUrl: 'src/components/books/card.html',
    styleUrls: ['src/components/books/card.css'],
    inputs: ['book:data']
})
export class BookCardComponent {
    public book: any;

    constructor() {
    }

    details() {
    }
}

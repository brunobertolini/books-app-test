import { Component } from '@angular/core';

@Component({
    selector: 'book-card',
    templateUrl: 'src/components/book-card/card.html',
    styleUrls: ['src/components/book-card/card.css'],
    inputs: ['book:data']
})
export class BookCardComponent {
    public book: any;

    constructor() {
    }
}

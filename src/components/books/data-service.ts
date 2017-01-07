import { Injectable } from '@angular/core';

import { HttpService } from './../../providers/http';


@Injectable()
export class BooksDataService {
    path: String = '/volumes';

    constructor(public http: HttpService) {
    }

    search(term) {
        return this.http.get(this.path, {q: term});
    }
}

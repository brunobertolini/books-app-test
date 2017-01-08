import { Injectable } from '@angular/core';

import { HttpService } from './../../providers/http';


@Injectable()
export class BooksDataService {
    path: String = '/volumes';

    constructor(public http: HttpService) {
    }

    search(options) {
        return this.http.get(this.path, options);
    }

    show(id) {
        return this.http.get(this.path + '/' + id);
    }
}

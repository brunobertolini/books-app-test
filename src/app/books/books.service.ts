import { Injectable } from '@angular/core';

import { HttpService } from './../shared/http.service';


@Injectable()
export class BooksService {
    path: String = '/volumes';

    constructor(public http: HttpService) {
    }

    show(id) {
        return this.http.get(this.path + '/' + id);
    }
}

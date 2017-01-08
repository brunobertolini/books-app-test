import { Injectable } from '@angular/core';

import { HttpService } from './../shared/http.service';


@Injectable()
export class SearchService {
    path: String = '/volumes';

    constructor(public http: HttpService) {
    }

    search(options) {
        return this.http.get(this.path, options);
    }
}

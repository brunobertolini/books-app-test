import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpService {
    entrypoint: String = 'https://www.googleapis.com/books/v1';

    constructor(private http: Http) {
    }

    get(path, params: any = {}) {
        let url = this.entrypoint + path;

        if (params) {
            url += '?' + Array.prototype.map.call(Object.getOwnPropertyNames(params), (k) => [k, params[k]].join('=')).join('&');
        }

        return this.http
            .get(url)
            .map(res => res.json())
            .toPromise();
    }
}

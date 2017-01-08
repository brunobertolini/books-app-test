import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './../search.service';


@Component({
    selector: 'search-box',
    templateUrl: 'src/app/search/search-box/search-box.component.html',
    styleUrls: ['src/app/search/search-box/search-box.component.css']
})
export class SearchBoxComponent {

    constructor(
        private router: Router,
        public service: SearchService
    ) {
    }

    exec(event) {
        if(event.keyCode !== 13 || !event.target.value || event.target.value.trim() === '') {
            return;
        }

        this.router.navigate(['/search'], {queryParams: {q: event.target.value}});
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SearchService } from './../search.service';


@Component({
    selector: 'search-box',
    templateUrl: 'src/app/search/search-box/search-box.component.html',
    styleUrls: ['src/app/search/search-box/search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    public q: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public service: SearchService
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.queryParams
            .subscribe((param: any) => {
                if (param.q && param.q !== '') {
                    this.q = param.q;
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    exec(event) {
        if(event.keyCode !== 13 || !event.target.value || event.target.value.trim() === '') {
            return;
        }

        this.router.navigate(['/search'], {queryParams: {q: event.target.value}});
    }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input('type') type: string;
    @Input('svgImage') image: string;
    @Input('info1') info1?: string;
    @Input('info2') info2?: string;
    @Input('info3') info3?: string;

    constructor() {
    }

    ngOnInit() {
    }
}

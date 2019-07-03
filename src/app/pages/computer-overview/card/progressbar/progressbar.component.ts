import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

    @Input("usedProcent") usedProcent;

    procent: number;
    widthProcent: string;

    constructor() {
    }

    ngOnInit() {
        this.procent = this.usedProcent;
        this.widthProcent = this.usedProcent + '%';
    }
}

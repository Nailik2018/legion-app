import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

    @Input("usedRamProcent") usedRamProcent;

    procent: number;
    widthProcent: string;

    constructor() {
    }

    ngOnInit() {
        this.procent = this.usedRamProcent;
        this.widthProcent = this.usedRamProcent + '%';
    }
}

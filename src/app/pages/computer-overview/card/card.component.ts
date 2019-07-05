import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input('type') type;
    @Input('svgImage') image;
    @Input('info1') info1?;
    @Input('info2') info2?;
    @Input('info3') info3?;
    @Input('info4') info4?;
    @Input('info5') info5?;
    @Input('info6') info6?;
    @Input('classDark') classDark?;
    @Input('classLight') classLight?;
    usedRamProcent: number;
    usedStorageProcent: number;

    constructor() {
    }

    ngOnInit() {
        this.fillProgressbar(this.type, this.info1, this.info2);
    }

    fillProgressbar(type: string, info1, info2): void{

        switch(type){
            case 'ram':
                this.usedRamProcent = Math.round( 10 * (100 * info2 / (info1 ))) / 10;
                break;
            case 'storage':
                this.usedStorageProcent = Math.round( 10 * (100 * info2 / (info1 ))) / 10;
                break;
            default:
                break;
        }
    }
}

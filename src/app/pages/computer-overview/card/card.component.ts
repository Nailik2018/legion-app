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

    constructor() {
    }

    ngOnInit() {
        this.fillProgressbarRam(this.type, this.info1, this.info2);
    }

    fillProgressbarRam(type: string, info1, info2): void{


        if(this.type === 'ram'){
            this.usedRamProcent = Math.round( 10 * (100 * info2 / (info1 ))) / 10;
            console.log(this.usedRamProcent);
            console.log(typeof this.usedRamProcent);
            console.log(type);
        }
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sensors-overview',
    templateUrl: './sensors-overview.component.html',
    styleUrls: ['./sensors-overview.component.scss']
})
export class SensorsOverviewComponent implements OnInit {

    @Input()
    translate: TranslateService;

    constructor() {
    }

    ngOnInit() {
    }

}

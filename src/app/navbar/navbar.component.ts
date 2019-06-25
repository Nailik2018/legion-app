import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
    }

    useLanguage(language: string) {
        document.cookie = 'selectedLanguage=' + language;
        this.translate.use(language);
    }
}

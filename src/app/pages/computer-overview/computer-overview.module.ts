import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComputerOverviewComponent} from "./computer-overview.component";
import {CardComponent} from "./card/card.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {HttpLoaderFactory} from "../../app.module";

@NgModule({
    declarations: [
        ComputerOverviewComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        FormsModule,
    ]
})
export class ComputerOverviewModule {
}

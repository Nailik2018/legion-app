import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerOverviewComponent } from "./computer-overview.component";
import { CardComponent } from "./card/card.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule} from "../../app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { ProgressbarComponent } from './card/progressbar/progressbar.component';

@NgModule({
    declarations: [
        ComputerOverviewComponent,
        CardComponent,
        ProgressbarComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule
    ]
})
export class ComputerOverviewModule {
}

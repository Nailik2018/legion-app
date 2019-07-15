import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkedListOverviewComponent } from './linked-list-overview.component';
import { TranslateModule } from "@ngx-translate/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
      LinkedListOverviewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TranslateModule,
      AppRoutingModule,
      HttpClientModule

  ]
})
export class LinkedListOverviewModule { }

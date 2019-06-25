import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RaspiOverviewComponent } from './pages/raspi-overview/raspi-overview.component';
import { SensorsOverviewComponent } from './pages/sensors-overview/sensors-overview.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RaspiOverviewComponent,
        SensorsOverviewComponent
    ],
    imports: [
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
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return new TranslateHttpLoader(http);
    } else {
        const serverUrl = environment.translate;
        return new TranslateHttpLoader(http, serverUrl , '.json');
    }
}

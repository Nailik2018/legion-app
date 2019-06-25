import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { RaspberryPi } from '../app/pages/raspi-overview/Raspberry-Pi';

@Injectable({
    providedIn: 'root'
})
export class RaspberryPiInformationsService {

    private http: HttpClient;
    private serverUrl = environment.ajaxUrl;
    constructor(http: HttpClient) {
        this.http = http;
    }

    getRaspberryPiInformation(): Observable<RaspberryPi[]> {
        return this.http.post<RaspberryPi[]>(this.serverUrl + 'raspberry_pi_informations.php', ' ');
    }
}

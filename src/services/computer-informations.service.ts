import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Computer } from '../app/pages/computer-overview/Computer';

@Injectable({
    providedIn: 'root'
})
export class ComputerInformationsService {

    private http: HttpClient;
    private serverUrl = environment.ajaxUrl;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getComputerInformation(): Observable<Computer> {
        return this.http.post<Computer>(this.serverUrl + 'computer_informations.php', '');
    }
}

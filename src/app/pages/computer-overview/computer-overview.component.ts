import { Component, OnInit } from '@angular/core';
import { ComputerInformationsService } from '../../../services/computer-informations.service';
import { Computer } from './Computer';
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-computer-overview',
    templateUrl: './computer-overview.component.html',
    styleUrls: ['./computer-overview.component.scss']
})
export class ComputerOverviewComponent implements OnInit {

    computer: Computer;
    computerInformationsService: ComputerInformationsService;
    cpu: string = 'cpu';
    ram: string = 'ram';
    storage: string = 'storage';
    system: string = 'system';
    network: string = 'network';
    software: string = 'software';
    darkBlue: string = '#3BAFDA';
    lightBlue: string = '#40C0EF';
    darkRed: string = '#DA4453';
    lightRed: string = '#EF4A5B';
    darkGreen: string = '#4CAF50';
    lightGreen: string = '#8BC34A';
    darkYellow: string = '#ffdf24';
    lightYellow: string = '#ffd008';
    darkPink: string = '#B5739D';
    lightPink: string = '#E793B2';
    lightOrange: string = '#FF871B';
    darkOrange: string = '#FF6209';
    lightCyan: string = '#0097A7';
    darkCyan: string = '#138496';
    cpuSVG: string = environment.images + 'cpu.svg';
    ramSVG: string = environment.images + 'ram.svg';
    storageSVG: string = environment.images + 'storage.svg';
    systemSVG: string = environment.images + 'system.svg';
    networkSVG: string = environment.images + 'network.svg';
    softwareSVG: string = environment.images + 'software.svg';

    constructor(computerInformationsService: ComputerInformationsService) {
        this.computerInformationsService = computerInformationsService;
    }

    ngOnInit() {
        this.getComputerInforamtions();
    }

    getComputerInforamtions(): void {
        this.computerInformationsService.getComputerInformation()
            .subscribe(computer => this.computer = computer);
    }
}

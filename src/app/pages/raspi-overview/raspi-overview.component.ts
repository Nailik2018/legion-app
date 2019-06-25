import { Component, OnInit } from '@angular/core';
import { RaspberryPiInformationsService } from '../../../services/raspberry-pi-informations.service';
import { RaspberryPi } from './Raspberry-Pi';

@Component({
  selector: 'app-raspi-overview',
  templateUrl: './raspi-overview.component.html',
  styleUrls: ['./raspi-overview.component.scss']
})
export class RaspiOverviewComponent implements OnInit {

  raspberryPiInformationService: RaspberryPiInformationsService;
  raspberryPi: any;

  constructor(raspberryPiInformationService: RaspberryPiInformationsService) {
    this.raspberryPiInformationService = raspberryPiInformationService;
  }

  ngOnInit() {
    this.getRaspberryPiData();
  }

  getRaspberryPiData(): void {
    this.raspberryPiInformationService.getRaspberryPiInformation()
        .subscribe(raspberryPi => this.raspberryPi = raspberryPi);
  }

}

import { TestBed } from '@angular/core/testing';

import { RaspberryPiInformationsService } from './raspberry-pi-informations.service';

describe('RaspberryPiInformationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaspberryPiInformationsService = TestBed.get(RaspberryPiInformationsService);
    expect(service).toBeTruthy();
  });
});

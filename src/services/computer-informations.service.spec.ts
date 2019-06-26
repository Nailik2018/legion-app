import { TestBed } from '@angular/core/testing';

import { ComputerInformationsService } from './computer-informations.service';

describe('ComputerInformationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComputerInformationsService = TestBed.get(ComputerInformationsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SelectedHotelService } from './selected-hotel.service';

describe('SelectedHotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedHotelService = TestBed.get(SelectedHotelService);
    expect(service).toBeTruthy();
  });
});

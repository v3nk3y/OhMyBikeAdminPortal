import { TestBed } from '@angular/core/testing';

import { BikeService } from './bike.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('BikeService', () => {
  let service: BikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
      ]
    });
    service = TestBed.inject(BikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

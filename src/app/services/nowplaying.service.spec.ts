import { TestBed } from '@angular/core/testing';

import { NowplayingService } from './nowplaying.service';

describe('NowplayingService', () => {
  let service: NowplayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowplayingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

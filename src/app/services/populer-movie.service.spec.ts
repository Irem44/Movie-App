import { TestBed } from '@angular/core/testing';

import { PopulerMovieService } from './populer-movie.service';

describe('PopulerMovieService', () => {
  let service: PopulerMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopulerMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

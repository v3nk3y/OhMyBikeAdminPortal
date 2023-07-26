import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RandomQuoteService } from './random-quote.service';

describe('RandomQuoteService', () => {
  let service: RandomQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RandomQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

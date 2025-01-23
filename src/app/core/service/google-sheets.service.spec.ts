import { TestBed } from '@angular/core/testing';
import { GoogleSheetsService } from './google-sheets.service';

describe('GoogleSheetsServiceTsService', () => {
  let service: GoogleSheetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSheetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

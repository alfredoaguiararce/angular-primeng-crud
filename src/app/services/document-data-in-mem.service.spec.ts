import { TestBed } from '@angular/core/testing';

import { DocumentDataInMemService } from './document-data-in-mem.service';

describe('DocumentDataInMemService', () => {
  let service: DocumentDataInMemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentDataInMemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

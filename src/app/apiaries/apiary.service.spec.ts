/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiaryService } from './apiary.service';

describe('Service: Apiary', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiaryService]
    });
  });

  it('should ...', inject([ApiaryService], (service: ApiaryService) => {
    expect(service).toBeTruthy();
  }));
});

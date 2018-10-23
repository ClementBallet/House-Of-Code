/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormationApiService } from './FormationApi.service';

describe('Service: FormationApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormationApiService]
    });
  });

  it('should ...', inject([FormationApiService], (service: FormationApiService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockFormationService } from './mock-formation.service';

describe('Service: MockFormation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockFormationService]
    });
  });

  it('should ...', inject([MockFormationService], (service: MockFormationService) => {
    expect(service).toBeTruthy();
  }));
});

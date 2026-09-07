import { TestBed } from '@angular/core/testing';

import { RetrieveSkills } from './retrieve-skills';

describe('RetrieveSkills', () => {
  let service: RetrieveSkills;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveSkills);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

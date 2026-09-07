import { TestBed } from '@angular/core/testing';

import { RetrieveProjects } from './retrieve-projects';

describe('RetrieveProjects', () => {
  let service: RetrieveProjects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveProjects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

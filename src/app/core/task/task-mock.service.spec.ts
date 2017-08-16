import { TestBed, inject } from '@angular/core/testing';

import { TaskMockService } from './task-mock.service';

describe('TaskMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskMockService]
    });
  });

  it('should be created', inject([TaskMockService], (service: TaskMockService) => {
    expect(service).toBeTruthy();
  }));
});

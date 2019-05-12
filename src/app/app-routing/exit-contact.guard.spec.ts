import { TestBed, async, inject } from '@angular/core/testing';

import { ExitContactGuard } from './exit-contact.guard';

describe('ExitContactGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExitContactGuard]
    });
  });

  it('should ...', inject([ExitContactGuard], (guard: ExitContactGuard) => {
    expect(guard).toBeTruthy();
  }));
});

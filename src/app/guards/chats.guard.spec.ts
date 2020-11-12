import { TestBed } from '@angular/core/testing';

import { ChatsGuard } from './chats.guard';

describe('ChatsGuard', () => {
  let guard: ChatsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChatsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

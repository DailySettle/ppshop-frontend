import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WishEffects } from './wish.effects';

describe('WishEffects', () => {
  let actions$: Observable<any>;
  let effects: WishEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WishEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WishEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

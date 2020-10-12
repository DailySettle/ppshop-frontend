import * as fromWish from '../reducers/wish.reducer';
import { selectWishState } from './wish.selectors';

describe('Wish Selectors', () => {
  it('should select the feature state', () => {
    const result = selectWishState({
      [fromWish.wishFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

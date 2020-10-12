import * as fromWish from './wish.actions';

describe('loadWishs', () => {
  it('should return an action', () => {
    expect(fromWish.loadWishs().type).toBe('[Wish] Load Wishs');
  });
});

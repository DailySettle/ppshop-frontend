import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromWish from '../reducers/wish.reducer';

export const selectWishState = createFeatureSelector<fromWish.WishlistState>(
  fromWish.wishFeatureKey
);

export const selectNumberOfProductInWishlist = createSelector(
  selectWishState,
  state => state.wishlist.length
);

export const selectIsProductInWishlist = createSelector(
  selectWishState,
  (state, props) => state.wishlist.findIndex(product => product.id === props.id) !== -1
);

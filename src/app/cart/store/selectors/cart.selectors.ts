import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.CartState>(
  fromCart.cartFeatureKey
);

export const selectAllItemsInCart = createSelector(
  selectCartState,
  state => state.cart
);

export const selectNumberOfItemInCart = createSelector(
  selectCartState,
  state => state.cart.length
);

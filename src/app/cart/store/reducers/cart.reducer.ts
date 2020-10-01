import {createReducer, on} from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import {CartItem} from '../../model/cart-item.model';

export const cartFeatureKey = 'cart';

export interface CartState {
  Cart: CartItem[];
}

export const initialState: CartState = {
  Cart: []
};


export const reducer = createReducer(
  initialState,

  on(CartActions.loadCarts, state => state),
  on(CartActions.loadCartsSuccess, (state, action) => state),
  on(CartActions.loadCartsFailure, (state, action) => state),
);


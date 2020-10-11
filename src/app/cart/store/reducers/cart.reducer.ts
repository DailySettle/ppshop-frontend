import {createReducer, on} from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import {CartItem} from '../../model/cart-item.model';
import * as _ from 'lodash';

export const cartFeatureKey = 'cart';

export interface CartState {
  cart: CartItem[];
}

export const initialState: CartState = {
  cart: []
};


export const reducer = createReducer(
  initialState,

  on(CartActions.loadCarts, state => state),
  on(CartActions.loadCartsSuccess, (state, action) => state),
  on(CartActions.loadCartsFailure, (state, action) => state),
  on(CartActions.addToCarts, (state, {product}) => {
    const newCart = _.cloneDeep(state.cart);
    if (newCart.find(productInCart => productInCart.product.id === product.id)) {
      return ({...state});
    } else {
      newCart.push(new CartItem(product, 1));
      return ({...state, cart: newCart});
    }
  }),
  on(CartActions.removeFromCarts, (state, action) => state),
);


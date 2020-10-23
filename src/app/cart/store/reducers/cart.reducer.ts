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

  on(CartActions.addToCarts, (state, {product}) => {
    const newCart = _.cloneDeep(state.cart);
    if (newCart.find(productInCart => productInCart.product.id === product.id)) {
      return ({...state});
    } else {
      newCart.push(new CartItem(product, 1));
      return ({...state, cart: newCart});
    }
  }),
  on(CartActions.removeFromCarts, (state) => state),
  on(CartActions.changeQtyInCarts, ((state, {product, qty}) => {
    const oldCart = _.cloneDeep(state.cart);
    const updateProduct = oldCart.find(cartItem => cartItem.product.id === product.id);
    if (updateProduct) {
      updateProduct.qty += qty;
    }
    return ({...state, cart: oldCart});
  }))
);


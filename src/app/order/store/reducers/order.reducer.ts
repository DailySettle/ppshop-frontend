import {Action, createReducer, on} from '@ngrx/store';
import * as OrderActions from '../actions/order.actions';
import {CartItem} from '../../../cart/model/cart-item.model';

export const orderFeatureKey = 'order';

export interface OrderState {
  cart: CartItem[];
  address: string | null;
}

export const initialState: OrderState = {
  cart: [],
  address: null
};


export const reducer = createReducer(
  initialState,

  on(OrderActions.loadOrders, state => state),
  on(OrderActions.loadOrdersSuccess, (state, action) => state),
  on(OrderActions.loadOrdersFailure, (state, action) => state),
);


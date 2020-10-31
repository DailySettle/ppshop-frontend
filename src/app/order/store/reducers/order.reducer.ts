import {createReducer, on} from '@ngrx/store';
import * as OrderActions from '../actions/order.actions';
import {CartItem} from '../../../cart/model/cart-item.model';
import {AddressModel} from '../../model/address.model';
import {PaymentModel} from '../../model/payment.model';

export const orderFeatureKey = 'order';

export interface OrderState {
  cart: CartItem[];
  address: AddressModel;
  payment: PaymentModel;
}

export const initialState: OrderState = {
  cart: [],
  address: null,
  payment: null
};


export const reducer = createReducer(
  initialState,

  on(OrderActions.loadOrders, state => state),
  on(OrderActions.loadOrdersSuccess, (state, action) => state),
  on(OrderActions.loadOrdersFailure, (state, action) => state),
  on(OrderActions.stepsSaveAddress, (state, {address}) => ({...state, address})),
  on(OrderActions.stepsSavePayment, (state, {payment}) => ({...state, payment}))
);


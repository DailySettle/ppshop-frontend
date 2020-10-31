import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromOrder from '../reducers/order.reducer';

export const selectOrderState = createFeatureSelector<fromOrder.OrderState>(
  fromOrder.orderFeatureKey
);

export const selectOrderAddress = createSelector(
  selectOrderState,
  state => state.address
);

export const selectOrderPayment = createSelector(
  selectOrderState,
  state => state.payment
);

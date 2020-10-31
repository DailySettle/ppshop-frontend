import {createAction, props} from '@ngrx/store';
import {AddressModel} from '../../model/address.model';
import {PaymentModel} from '../../model/payment.model';

export const loadOrders = createAction(
  '[Order] Load Orders'
);

export const loadOrdersSuccess = createAction(
  '[Order] Load Orders Success',
  props<{ data: any }>()
);

export const loadOrdersFailure = createAction(
  '[Order] Load Orders Failure',
  props<{ error: any }>()
);

export const stepsSaveAddress = createAction(
  '[Order] Steps Save Address',
  props<{ address: AddressModel }>()
);

export const stepsSavePayment = createAction(
  '[Order] Steps Save Payment',
  props<{ payment: PaymentModel }>()
);

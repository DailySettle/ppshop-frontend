import {createAction, props} from '@ngrx/store';
import {Product} from '../../../product/model/product.model';

export const loadCarts = createAction(
  '[Cart] Load Carts'
);

export const loadCartsSuccess = createAction(
  '[Cart] Load Carts Success',
  props<{ data: any }>()
);

export const loadCartsFailure = createAction(
  '[Cart] Load Carts Failure',
  props<{ error: any }>()
);

export const addToCarts = createAction(
  '[Cart] Add to Carts',
  props<{ product: Product }>()
);

export const removeFromCarts = createAction(
  '[Cart] Remove from Carts',
  props<{ product: Product }>()
);

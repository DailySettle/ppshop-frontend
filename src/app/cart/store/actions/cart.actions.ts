import {createAction, props} from '@ngrx/store';
import {Product} from '../../../product/model/product.model';

export const addToCarts = createAction(
  '[Cart] Add to Carts',
  props<{ product: Product }>()
);

export const removeFromCarts = createAction(
  '[Cart] Remove from Carts',
  props<{ product: Product }>()
);

export const changeQtyInCarts = createAction(
  '[Cart] Change Qty of Carts',
  props<{ product: Product, qty: number }>()
);

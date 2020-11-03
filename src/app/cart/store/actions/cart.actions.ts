import {createAction, props} from '@ngrx/store';
import {Product} from '../../../product/model/product.model';
import {CartItem} from '../../model/cart-item.model';

export const addToCarts = createAction(
  '[Cart] Add to Carts',
  props<{ product: Product }>()
);

export const removeFromCarts = createAction(
  '[Cart] Remove from Carts',
  props<{ cartItem: CartItem }>()
);

export const changeQtyInCarts = createAction(
  '[Cart] Change Qty of Carts',
  props<{ product: Product, qty: number }>()
);

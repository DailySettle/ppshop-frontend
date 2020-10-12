import { createAction, props } from '@ngrx/store';
import {Product} from '../../../product/model/product.model';

export const loadWishs = createAction(
  '[Wish] Load Wishs'
);

export const loadWishsSuccess = createAction(
  '[Wish] Load Wishs Success',
  props<{ data: any }>()
);

export const loadWishsFailure = createAction(
  '[Wish] Load Wishs Failure',
  props<{ error: any }>()
);

export const addToWishlist = createAction(
  '[Wish] Add to Wishlist',
  props<{ product: Product }>()
);

export const removeFromWishlist = createAction(
  '[Wish] Remove from Wishlist',
  props<{ product: Product }>()
);

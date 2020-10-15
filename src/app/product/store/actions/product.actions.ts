import { createAction, props } from '@ngrx/store';
import {Product} from '../../model/product.model';

export const loadAllProducts = createAction(
  '[Product] Load Products'
);

export const loadAllProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadAllProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ errorMessage: string }>()
);

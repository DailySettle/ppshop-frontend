import { createAction, props } from '@ngrx/store';
import {Product} from '../../model/product.model';

export const loadAllProducts = createAction(
  '[ProductModel] Load Products'
);

export const loadAllProductsSuccess = createAction(
  '[ProductModel] Load Products Success',
  props<{ payload: Product[] }>()
);

export const loadAllProductsFailure = createAction(
  '[ProductModel] Load Products Failure',
  props<{ errorMessage: string }>()
);

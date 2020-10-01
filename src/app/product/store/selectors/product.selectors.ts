import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.ProductState>(
  fromProduct.productFeatureKey
);

import {Action, createReducer, on} from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import {Product} from '../../model/product.model';

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: []
};


export const reducer = createReducer(
  initialState,

  on(ProductActions.loadProducts, state => state),
  on(ProductActions.loadProductsSuccess, (state, action) => state),
  on(ProductActions.loadProductsFailure, (state, action) => state),
);


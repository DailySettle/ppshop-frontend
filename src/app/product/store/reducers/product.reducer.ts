import {Action, createReducer, on} from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import {Product} from '../../model/product.model';

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[];
  errorMessage: string | null;
}

export const initialState: ProductState = {
  products: [],
  errorMessage: null
};


export const reducer = createReducer(
  initialState,

  on(ProductActions.loadAllProductsSuccess, (state, action) => ({...state, products: action.payload})),
  on(ProductActions.loadAllProductsFailure, (state, action) => ({...state, errorMessage: action.errorMessage})),
);

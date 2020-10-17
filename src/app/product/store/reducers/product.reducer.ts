import {createReducer, on} from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import {Product} from '../../model/product.model';
import {CategoryType} from '../../model/category-type.enum';

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[];
  selectType: CategoryType;
  errorMessage: string | null;
}

export const initialState: ProductState = {
  products: [],
  selectType: null,
  errorMessage: null
};


export const reducer = createReducer(
  initialState,

  on(ProductActions.loadAllProductsSuccess, (state, {products}) => ({...state, products})),
  on(ProductActions.loadAllProductsFailure, (state, {errorMessage}) => ({...state, errorMessage})),
  on(ProductActions.selectProductType, (state, {selectType}) => ({...state, selectType})),
);

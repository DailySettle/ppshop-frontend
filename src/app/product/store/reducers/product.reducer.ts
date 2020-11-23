import {createReducer, on} from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import {Product} from '../../model/product.model';
import {CategoryType} from '../../model/category-type.enum';
import {ProductGroup} from '../../model/product-group.enum';

export const productFeatureKey = 'product';
export const routerKey = 'routerReducer';

export interface ProductState {
  products: Product[];
  selectType: CategoryType;
  productGroup: ProductGroup;
  errorMessage: string;
}

export const initialState: ProductState = {
  products: [],
  selectType: null,
  productGroup: null,
  errorMessage: null
};


export const reducer = createReducer(
  initialState,

  on(ProductActions.loadAllProductsSuccess, (state, {products}) => ({...state, products})),
  on(ProductActions.loadAllProductsFailure, (state, {errorMessage}) => ({...state, errorMessage})),
  on(ProductActions.selectProductType, (state, {selectType}) => ({...state, selectType})),
  on(ProductActions.selectProductGroup, (state, {selectGroup}) => ({...state, productGroup: selectGroup})),
);

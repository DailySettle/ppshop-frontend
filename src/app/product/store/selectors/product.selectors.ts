import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.ProductState>(
  fromProduct.productFeatureKey
);

export const selectAllProduct = createSelector(
  selectProductState,
  state => state.products
);

export const selectType = createSelector(
  selectProductState,
  state => state.selectType
);

export const selectOneTypeOfProduct = createSelector(
  selectAllProduct,
  selectType,
  (state, type) => {
    if (type){
      return state.filter(product => product.category === type);
    }else {
      return state;
    }
  }
);

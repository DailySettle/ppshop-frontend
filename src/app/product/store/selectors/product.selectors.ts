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
    if (type) {
      switch (type) {
        case 'NEW':
          return state.filter(product => product.newArrive === true);
        case 'SALE':
          return state.filter(product => product.onSale === true);
        default:
          return state.filter(product => product.category === type);
      }
    } else {
      return state;
    }
  }
);

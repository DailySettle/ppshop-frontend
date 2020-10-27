import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';
import {ProductGroup} from '../../model/product-group.enum';

export const selectProductState = createFeatureSelector<fromProduct.ProductState>(
  fromProduct.productFeatureKey
);

export const selectAllProduct = createSelector(
  selectProductState,
  state => state.products
);

export const selectProductById = createSelector(
  selectProductState,
  (state, props) => state.products.find(product => product.id === props.id)
);

export const selectType = createSelector(
  selectProductState,
  state => state.selectType
);

export const selectGroup = createSelector(
  selectProductState,
  state => state.productGroup
);

export const selectFilteredProduct = createSelector(
  selectAllProduct,
  selectType,
  selectGroup,
  (state, type, group) => {
    let result = state;
    if (group) {
      switch (group) {
        case ProductGroup.NEW: {
          result = result.filter(product => product.newArrive === true);
          break;
        }
        case ProductGroup.SALE: {
          result = result.filter(product => product.onSale === true);
          break;
        }
        default:
          break;
      }
    }
    if (type) {
      result = result.filter(product => product.category === type);
    }
    return result;
  }
);

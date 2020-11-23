import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';
import * as fromRouter from '@ngrx/router-store';
import {ProductGroup} from '../../model/product-group.enum';

export interface RouterState {
  router: fromRouter.RouterReducerState<any>;
}

export const selectProductState = createFeatureSelector<fromProduct.ProductState>(
  fromProduct.productFeatureKey
);

export const selectRouterState = createFeatureSelector<RouterState, fromRouter.RouterReducerState<any>>('router');

export const selectAllProduct = createSelector(
  selectProductState,
  state => state.products
);

export const selectProductById = createSelector(
  selectProductState,
  selectRouterState,
  (state, router) => {
    console.log(router);
    return state.products.find(product => product.id === router.state.root.children[0].params.id);
  }
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

import {createAction, props} from '@ngrx/store';
import {Product} from '../../model/product.model';
import {CategoryType} from '../../model/category-type.enum';
import {ProductGroup} from '../../model/product-group.enum';

export const loadAllProducts = createAction(
  '[Product] Load Products'
);

export const loadAllProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadAllProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ errorMessage: string }>()
);

export const selectProductType = createAction(
  '[Product] Load Certain Type Products',
  props<{ selectType: CategoryType | null }>()
);

export const selectProductGroup = createAction(
  '[Product] Load Certain Group Products',
  props<{ selectGroup: ProductGroup | null }>()
);

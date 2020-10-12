import {createReducer, on} from '@ngrx/store';
import * as WishActions from '../actions/wish.actions';
import * as _ from 'lodash';
import {Product} from '../../../product/model/product.model';

export const wishFeatureKey = 'wish';

export interface WishlistState {
  wishlist: Product[];
}

export const initialState: WishlistState = {
  wishlist: []
};


export const reducer = createReducer(
  initialState,

  on(WishActions.loadWishs, state => state),
  on(WishActions.loadWishsSuccess, (state, action) => state),
  on(WishActions.loadWishsFailure, (state, action) => state),
  on(WishActions.addToWishlist, (state, {product}) => {
    const newList = _.cloneDeep(state.wishlist);
    if (newList.find(productInWishlist => productInWishlist.id === product.id)) {
      return ({...state});
    } else {
      newList.push(product);
      return ({...state, wishlist: newList});
    }
  }),
  on(WishActions.removeFromWishlist, (state, {product}) => {
    const oldList = _.cloneDeep(state.wishlist);
    const newList = oldList.filter(productInWishlist => productInWishlist.id !== product.id);
    return ({...state, wishlist: newList});
  }),
);


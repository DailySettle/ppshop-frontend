import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectNumberOfItemInCart} from '../../cart/store/selectors/cart.selectors';
import {Observable} from 'rxjs';
import {selectNumberOfProductInWishlist} from '../../wishlist/store/selectors/wish.selectors';
import {selectProductType} from '../../product/store/actions/product.actions';

@Component({
  selector: 'pps-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  numberOfItemsInCart: Observable<number>;
  numberOfItemsInWishlist: Observable<number>;

  constructor(private store: Store) {
    this.numberOfItemsInCart = this.store.select(selectNumberOfItemInCart);
    this.numberOfItemsInWishlist = this.store.select(selectNumberOfProductInWishlist);
  }

  ngOnInit(): void {

  }

  showAllProducts(): void {
    this.store.dispatch(selectProductType({selectType: null}));
  }

  showNewProducts(): void {
    this.store.dispatch(selectProductType({selectType: 'NEW'}));
  }

  showDiscountedProducts(): void {
    this.store.dispatch(selectProductType({selectType: 'SALE'}));
  }
}

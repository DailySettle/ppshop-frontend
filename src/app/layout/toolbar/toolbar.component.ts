import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectNumberOfItemInCart} from '../../cart/store/selectors/cart.selectors';
import {Observable} from 'rxjs';
import {selectNumberOfProductInWishlist} from '../../wishlist/store/selectors/wish.selectors';
import {selectProductGroup} from '../../product/store/actions/product.actions';
import {ProductGroup} from '../../product/model/product-group.enum';

@Component({
  selector: 'pps-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  numberOfItemsInCart: Observable<number>;
  numberOfItemsInWishlist: Observable<number>;
  selectedTab: ProductGroup = ProductGroup.ALL;
  ProductGroup = ProductGroup;

  constructor(private store: Store) {
    this.numberOfItemsInCart = this.store.select(selectNumberOfItemInCart);
    this.numberOfItemsInWishlist = this.store.select(selectNumberOfProductInWishlist);
  }

  ngOnInit(): void {

  }

  showAllProducts(): void {
    this.selectedTab = ProductGroup.ALL;
    this.store.dispatch(selectProductGroup({selectGroup: ProductGroup.ALL}));
  }

  showNewProducts(): void {
    this.selectedTab = ProductGroup.NEW;
    this.store.dispatch(selectProductGroup({selectGroup: ProductGroup.NEW}));
  }

  showDiscountedProducts(): void {
    this.selectedTab = ProductGroup.SALE;
    this.store.dispatch(selectProductGroup({selectGroup: ProductGroup.SALE}));
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Store} from '@ngrx/store';
import {addToCarts} from '../../../cart/store/actions/cart.actions';
import {addToWishlist, removeFromWishlist} from '../../../wishlist/store/actions/wish.actions';
import {Observable} from 'rxjs';
import {selectIsProductInWishlist} from '../../../wishlist/store/selectors/wish.selectors';

@Component({
  selector: 'pps-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem: Product;
  isInWishlist: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isInWishlist = this.store.select(selectIsProductInWishlist, {id: this.productItem.id});
  }

  handleAddToCart(): void {
    this.store.dispatch(addToCarts({product: this.productItem}));
  }

  handleRemoveFromWishlist(): void {
    this.store.dispatch(addToWishlist({product: this.productItem}));
  }

  handleAddToWishlist(): void {
    this.store.dispatch(removeFromWishlist({product: this.productItem}));
  }

}

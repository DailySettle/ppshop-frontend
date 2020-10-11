import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Store} from '@ngrx/store';
import {addToCarts} from '../../../cart/store/actions/cart.actions';

@Component({
  selector: 'pps-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem: Product;
  addedToWishlist = false;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  handleAddToCart(): void {
    this.store.dispatch(addToCarts({product: this.productItem}));
  }

  handleRemoveFromWishlist(): void {
    this.addedToWishlist = false;
  }

  handleAddToWishlist(): void {
    this.addedToWishlist = true;
  }

}

import {Component, OnInit} from '@angular/core';
import {Product} from '../../product/model/product.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectAllProductInWishlist, selectNumberOfProductInWishlist} from '../store/selectors/wish.selectors';
import {SelectItem} from 'primeng/api';
import {selectNumberOfItemInCart} from '../../cart/store/selectors/cart.selectors';

@Component({
  selector: 'pps-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  items$: Observable<Product[]>;
  param: any;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectAllProductInWishlist);
    this.store.select(selectNumberOfProductInWishlist).subscribe(numberOfItem => this.param = {number: numberOfItem});
  }

  ngOnInit(): void {
  }

}

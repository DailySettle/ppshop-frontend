import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {selectAllItemsInCart, selectNumberOfItemInCart} from '../store/selectors/cart.selectors';
import {CartItem} from '../model/cart-item.model';
import {changeQtyInCarts} from '../store/actions/cart.actions';
import {Product} from '../../product/model/product.model';

@Component({
  selector: 'pps-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  totalPrice: number;
  param: any;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(selectNumberOfItemInCart).subscribe(numberOfItem => this.param = {number: numberOfItem});
    this.cartItems$ = this.store.select(selectAllItemsInCart).pipe(
      tap(cartItems => {
        if (cartItems.length > 0) {
          this.totalPrice = cartItems
            .map(cartItem => cartItem.product.price * cartItem.qty)
            .reduce((previousValue, currentValue) => previousValue + currentValue);
        } else {
          this.totalPrice = 0;
        }
      })
    );
  }

  qtyIncrease(product: Product): void {
    this.store.dispatch(changeQtyInCarts({product, qty: 1}));
  }

  qtyDecrease(product: Product): void {
    this.store.dispatch(changeQtyInCarts({product, qty: -1}));
  }
}

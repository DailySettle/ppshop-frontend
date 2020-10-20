import {Component, OnInit} from '@angular/core';
import {Product} from '../../product/model/product.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {selectAllItemsInCart} from '../store/selectors/cart.selectors';
import {CartItem} from '../model/cart-item.model';

@Component({
  selector: 'pps-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  totalPrice: number;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
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

}

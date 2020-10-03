import {CartItem} from '../../cart/model/cart-item.model';

export class OrderModel {
  constructor(public cart: CartItem[], public address: string) {
  }
}

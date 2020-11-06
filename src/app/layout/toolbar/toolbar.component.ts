import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectNumberOfItemInCart} from '../../cart/store/selectors/cart.selectors';
import {Observable} from 'rxjs';
import {selectNumberOfProductInWishlist} from '../../wishlist/store/selectors/wish.selectors';
import {selectProductGroup} from '../../product/store/actions/product.actions';

@Component({
  selector: 'pps-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private store: Store) {

  }

  ngOnInit(): void {

  }

}
